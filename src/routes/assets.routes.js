const { Router } = require('express');
const assetsController = require('../controller/assets.controller');

const assetsRoutes = Router();

assetsRoutes.get('/ativos/:codAtivo', assetsController.getByCodAtivo);
assetsRoutes.get('/ativos/cliente/:codCliente', assetsController.getAssetsByClientId)

module.exports = assetsRoutes;