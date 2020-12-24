const DATABASE = require('./Db');

const PORT = process.env.PORT || 3000;
const LIMITLINHAS = DATABASE.LIMITLINHAS;

module.exports = { PORT, STRCONNECTION, LIMITLINHAS };
