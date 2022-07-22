const { Router } = require('express');
const loginController = require('../controller/login.controller');

const loginRoutes = Router();

loginRoutes.post('/login', loginController.login);

module.exports = loginRoutes;