const jwt = require('jsonwebtoken');
require('dotenv').config();
const APP_SECRET = process.env.SECRET_KEY;

function enconded(user) {
  const token = jwt.sign({ ...user }, APP_SECRET);
  return token;
};

function decoded(token) {
  try {
    const decoded = jwt.verify(token, APP_SECRET);
    return decoded;
  }
  catch (err) {
    return { message: 'Invalid token' };
  }
};

module.exports = {
  enconded,
  decoded,
};