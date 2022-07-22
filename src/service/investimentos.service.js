// const investimentosModel = require('../model/investimentos.model');
const userModel = require('../model/user.model');
const assetsModel = require('../model/assets.model');

async function comprar(codCliente, codAtivo, qtdAtivo) {
  // Pegar usuário pra checar carteira
  const user = await userModel.getUserById(codCliente, true, true);
  // Acessar assets pra checar qtd de ações disponíveis
  const [asset] = await assetsModel.getByCodAtivo(codAtivo);
  if (!asset) {
    return "Asset not found"
  }
  // Validar se qtd de ações que está sendo comprada é menor ou igual à quantidade disponível na corretora
  const novaQuantidadeDeAcoesNaCorretora = asset.amount - qtdAtivo
  if (novaQuantidadeDeAcoesNaCorretora < 0) {
    return "Quantidade do pedido maior que a quantidade disponível na corretora"
  }
  // Validar se o usuário tem saldo disponível na carteira equivalente a o que está sendo comprado
  const valorASerInvestido = qtdAtivo * asset.currency
  if (valorASerInvestido > user.Wallet.value) {
    return "Quantidade do pedido maior que a quantidade disponível na corretora"
  }
  // após efetivação da compra
  // baixar o estoque de ações no saldo da corretora
  await assetsModel.updateAmount(codAtivo, novaQuantidadeDeAcoesNaCorretora);
  // baixar o dinheiro da carteira do cliente
  await userModel.updateWallet(codCliente, user.Wallet.value - valorASerInvestido);
  // adicionar acao comprada para lista de acoes do cliente
  const userSelectedAsset = user.UserAssets.find((asset) => asset.id === codAtivo)
  if (!userSelectedAsset) {
    await userModel.createUserAsset(codCliente, codAtivo, qtdAtivo);
  } else {
    await userModel.updateUserAsset(codCliente, codAtivo, userSelectedAsset.amount + qtdAtivo);
  }
  // salvar o histórico da opraão na assetsOperation
  const assetsOperation = await assetsModel.saveOperation(codAtivo, qtdAtivo, asset.currency, codCliente, 'compra');
  // retornar a compra para carteira de acoes do cliente
  return assetsOperation;
}

module.exports = {
  comprar,
};

// const operator = await assetsModel.getByCodAtivo(codAtivo, qtdAtivo)