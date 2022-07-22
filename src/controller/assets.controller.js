const assetsService = require('../service/assets.service');

async function getByCodAtivo(req, res) {
  try {
    const { codAtivo } = req.params;
    const result = await assetsService.getByCodAtivo(Number(codAtivo));
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({error: true, message: 'Unexepcetd Error'}) 
  }
}

module.exports = {
  getByCodAtivo,
};