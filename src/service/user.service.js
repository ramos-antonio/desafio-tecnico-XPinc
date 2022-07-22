const userModel = require('../model/user.model');

async function getAll() {
  const allUsers = await userModel.getAll();
  return allUsers;
}

module.exports = {
  getAll,
};