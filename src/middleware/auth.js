const confJwt = require('../config/Jwt');
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  // Express headers are auto converted to lowercase
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    jwt.verify(token, confJwt.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token NÃO está válido!'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Requisição exige um token válido!'
    });
  }
};

module.exports = {
  checkToken: checkToken
};