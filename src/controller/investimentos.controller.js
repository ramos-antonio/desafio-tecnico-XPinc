const investimentosService = require('../service/investimentos.service');

async function comprar(req, res) {
  const { codCliente, codAtivo, qtdAtivo } = req.body;
  const result = await investimentosService.comprar(codCliente, codAtivo, qtdAtivo);
  return res.status(200).json({ result });
}

module.exports = {
  comprar,
};