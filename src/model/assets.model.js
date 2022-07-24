const connection = require("../database/connection");

async function getByCodAtivo(codAtivo) {
  const ativo = await connection.asset.findMany({
    where: { id: codAtivo },
  });

  return ativo;
}

async function updateAmount(codAtivo, newAssetAmount) {
  const assetUpdated = await connection.asset.update({
    where: { id: codAtivo },
    data: { amount: newAssetAmount },
  });
  return assetUpdated;
}

async function saveOperation(
  codAtivo,
  qtdAtivo,
  currency,
  codCliente,
  typeOperation
) {
  const operationSaved = await connection.assetOperation.create({
    data: {
      id_user: codCliente,
      amount: qtdAtivo,
      value: currency,
      id_asset: codAtivo,
      type: typeOperation,
    },
  });
  return operationSaved;
}

async function getAllAssets() {
  return await connection.asset.findMany();
}

module.exports = {
  getByCodAtivo,
  updateAmount,
  saveOperation,
  getAllAssets,
};
