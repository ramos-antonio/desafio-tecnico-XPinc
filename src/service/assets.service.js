const assetsModel = require('../model/assets.model');

async function getByCodAtivo(codAtivo) {
  const ativo = await assetsModel.getByCodAtivo(codAtivo);
  return ativo;
}

module.exports = {
  getByCodAtivo,
};