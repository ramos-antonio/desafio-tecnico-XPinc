const userService = require("../service/user.service");

async function getAll(_req, res) {
  try {
    const getAllUsers = await userService.getAll();
    res.status(200).json(getAllUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ result: "Unexpected error" });
  }
}

async function getUserWalletById(req, res) {
  try {
    const { id } = req.params;
    const wallet = await userService.getUserWalletById(Number(id));
    res.status(200).json(wallet);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ result: "Unexpected error" });
  }
}

async function depositRequest(req, res) {
  try {
    const { codCliente: id, Valor: value } = req.body;
    const newDeposit = await userService.depositRequest(
      Number(id),
      Number(value)
    );
    res.status(200).json(newDeposit);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ result: "Unexpected error" });
  }
}

module.exports = {
  getAll,
  getUserWalletById,
  depositRequest,
};
