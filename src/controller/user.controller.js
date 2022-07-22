const userService = require('../service/user.service');

async function getAll(_req, res) {
  const getAllUsers = await userService.getAll();
  res.status(200).json(getAllUsers);
}

module.exports = {
  getAll,
};
