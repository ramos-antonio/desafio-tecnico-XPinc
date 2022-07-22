const assetsModel = require("../model/assets.model");
const userModel = require("../model/user.model");

async function getByCodAtivo(codAtivo) {
  const ativo = await assetsModel.getByCodAtivo(codAtivo);
  return ativo;
}

async function getAssetsByClientId(id) {
  const result = await userModel.getUserById(id, false, true);
  return result.UserAssets.map((a) => {
    const { id_user, id_asset, amount, Asset } = a;
    return {
      CodCliente: id_user,
      CodAtivo: id_asset,
      Valor: Asset.currency,
      QtdeAtivo: amount,
    };
  });
}

module.exports = {
  getByCodAtivo,
  getAssetsByClientId,
};
