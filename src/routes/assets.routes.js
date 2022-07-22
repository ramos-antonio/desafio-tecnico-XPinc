const { Router } = require('express');
const assetsController = require('../controller/assets.controller');

const assetsRoutes = Router();

assetsRoutes.get('/ativos/:codAtivo', assetsController.getByCodAtivo);

module.exports = assetsRoutes;