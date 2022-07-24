const userModel = require("../model/user.model");

async function getAll() {
  return await userModel.getAll();
}

async function getUserWalletById(codCliente) {
  const user = await userModel.getUserById(codCliente, true, false);
  return {
    CodCliente: user.id,
    Saldo: user.Wallet.value,
  };
}

async function depositRequest(codCliente, value) {
  const amount = await getUserWalletById(codCliente);
  if (value > 0) {
    const operationSaved = await userModel.depositRequest(codCliente, value);
    await userModel.updateWallet(codCliente, amount.Saldo + value);
    return {
      CodCliente: operationSaved.id_user,
      Valor: value,
    };
  }
}

async function withdrawnRequest(codCliente, value) {
  const amount = await getUserWalletById(codCliente);
  if (amount.Saldo > value && value > 0) {
    const operationSaved = await userModel.withdrawnRequest(codCliente, value);
    await userModel.updateWallet(codCliente, amount.Saldo - value);
    return {
      CodCliente: operationSaved.id_user,
      Valor: value,
    };
  }
}

module.exports = {
  getAll,
  getUserWalletById,
  depositRequest,
  withdrawnRequest,
};
