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
  const user = await userModel.depositRequest(codCliente, value);
  return {
    CodCliente: user.id,
    Valor: value,
  };
}

module.exports = {
  getAll,
  getUserWalletById,
  depositRequest,
};
