require('dotenv').config();
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(UNAUTHORIZED)
      .send({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'secret');
  } catch (err) {
    return res
      .status(UNAUTHORIZED)
      .send({ message: 'Необходима авторизация' });
  }

  req.user = payload;

  return next();
};

module.exports = { auth };
