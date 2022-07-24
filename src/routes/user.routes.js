const { Router } = require("express");
const userController = require("../controller/user.controller");

const userRoutes = Router();

userRoutes.get("/user", userController.getAll);
userRoutes.get("/conta/:id", userController.getUserWalletById);
userRoutes.post("/conta/deposito", userController.depositRequest);
userRoutes.post("/conta/saque", userController.withdrawnRequest);

module.exports = userRoutes;
