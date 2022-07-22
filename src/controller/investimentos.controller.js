const investimentosService = require('../service/investimentos.service');

async function comprar(req, res) {
  try {
    const { codCliente, codAtivo, qtdAtivo } = req.body;
    const result = await investimentosService.comprar(codCliente, codAtivo, qtdAtivo);
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({result: "Unexpected error"})
  }
}

async function vender(req, res) {
  try {
    const { codCliente, codAtivo, qtdAtivo } = req.body;
    const result = await investimentosService.vender(codCliente, codAtivo, qtdAtivo);
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({result: "Unexpected error"})
  }
}

module.exports = {
  comprar,
  vender,
};