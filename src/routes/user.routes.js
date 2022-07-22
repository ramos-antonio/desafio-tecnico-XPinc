const { Router } = require("express");
const userController = require("../controller/user.controller");

const userRoutes = Router();

userRoutes.get("/user", userController.getAll);
userRoutes.get("/conta/:id", userController.getUserWalletById);

module.exports = userRoutes;
