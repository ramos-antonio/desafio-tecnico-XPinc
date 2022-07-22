// const investimentosModel = require('../model/investimentos.model');
const userModel = require('../model/user.model');
const assetsModel = require('../model/assets.model');

async function comprar(codCliente, codAtivo, qtdAtivo) {
  const user = await userModel.getUserById(codCliente, true, true);
  const [asset] = await assetsModel.getByCodAtivo(codAtivo);
  if (!asset) {
    return "Asset not found"
  }
  const novaQuantidadeDeAcoesNaCorretora = asset.amount - qtdAtivo
  if (novaQuantidadeDeAcoesNaCorretora < 0) {
    return "Quantidade do pedido maior que a quantidade disponível na corretora"
  }
  const valorASerInvestido = qtdAtivo * asset.currency
  if (valorASerInvestido > user.Wallet.value) {
    return "Quantidade do pedido maior que a quantidade disponível na corretora"
  }

  await assetsModel.updateAmount(codAtivo, novaQuantidadeDeAcoesNaCorretora);
  await userModel.updateWallet(codCliente, user.Wallet.value - valorASerInvestido);
  const userSelectedAsset = user.UserAssets.find((asset) => asset.id === codAtivo)
  if (!userSelectedAsset) {
    await userModel.createUserAsset(codCliente, codAtivo, qtdAtivo);
  } else {
    await userModel.updateUserAsset(codCliente, codAtivo, userSelectedAsset.amount + qtdAtivo);
  }

  const assetsOperation = await assetsModel.saveOperation(codAtivo, qtdAtivo, asset.currency, codCliente, 'compra');
  return assetsOperation;
}

async function vender(codCliente, codAtivo, qtdAtivoParaVender) {
  const user = await userModel.getUserById(codCliente, true, true);
  const [asset] = await assetsModel.getByCodAtivo(codAtivo);
  if (!asset) {
    return "Asset not found"
  }

  const userSelectedAsset = user.UserAssets.find((asset) => asset.id === codAtivo)
  if (!userSelectedAsset) {
    return 'nem tem'
  }
  if (qtdAtivoParaVender <= 0 || userSelectedAsset.amount < qtdAtivoParaVender) {
    return 'Querendo vender quantidade inválida'
  }

  await assetsModel.updateAmount(codAtivo, asset.amount + qtdAtivoParaVender);
  await userModel.updateWallet(codCliente, user.Wallet.value + (qtdAtivoParaVender * asset.currency));
  await userModel.updateUserAsset(codCliente, codAtivo, userSelectedAsset.amount - qtdAtivoParaVender);

  const assetsOperation = await assetsModel.saveOperation(codAtivo, qtdAtivoParaVender, asset.currency, codCliente, 'venda');
  return assetsOperation;
}

module.exports = {
  comprar,
  vender,
};

// const operator = await assetsModel.getByCodAtivo(codAtivo, qtdAtivo)