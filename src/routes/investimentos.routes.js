const { Router } = require('express');
const investimentosController = require('../controller/investimentos.controller');

const investimentosRoutes = Router();

investimentosRoutes.post('/investimentos/comprar', investimentosController.comprar);

investimentosRoutes.post('/investimentos/vender', investimentosController.vender);

module.exports = investimentosRoutes;