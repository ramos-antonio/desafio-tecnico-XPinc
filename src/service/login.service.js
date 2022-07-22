const loginModel = require('../model/login.model');
const token = require('../utils/token');

async function login(email, password) {
  const login = await loginModel.login(email, password);
  if (!login) {
    return "User not found";
  }
  const tokenGen = await token.enconded({ email, password });
  return tokenGen;
}

module.exports = {
  login,
};