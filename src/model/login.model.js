const connection = require("../database/connection");

async function login(email, password) {
  const user = await connection.user.findMany({
    where: { email, password: password.toString() },
  });

  return user;
};

module.exports = {
  login,
};
