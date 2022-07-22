const connection = require("../database/connection");

async function getAll() {
  const allUsers = await connection.user.findMany();
  return allUsers;
}

async function getUserById(id, getWallet = false, getUserAssets = false) {
  const userAssets = getUserAssets && { include: { Asset: true } };
  const user = await connection.user.findFirst({
    where: { id },
    include: { Wallet: getWallet, UserAssets: userAssets },
  });
  return user;
}

async function updateWallet(codCliente, value) {
  return await connection.wallet.update({
    where: {
      id_user: codCliente,
    },
    data: { value },
  });
}

async function createUserAsset(codCliente, id_asset, qtdAtivo) {
  return await connection.userAssets.create({
    data: {
      id_user: codCliente,
      id_asset,
      amount: qtdAtivo,
    },
  });
}

async function updateUserAsset(codCliente, id_asset, qtdAtivo) {
  return await connection.userAssets.updateMany({
    where: {
      id_user: codCliente,
      id_asset,
    },
    data: {
      amount: qtdAtivo,
    },
  });
}

module.exports = {
  getAll,
  getUserById,
  updateWallet,
  createUserAsset,
  updateUserAsset,
};
