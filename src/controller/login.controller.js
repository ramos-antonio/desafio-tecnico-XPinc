const loginService = require('../service/login.service');

async function login(req, res) {
  const { email, password } = req.body;
  const token = await loginService.login(email, password);
  return res.status(200).json({ token });
}

module.exports = {
  login,
};