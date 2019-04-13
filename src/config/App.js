const DATABASE = require('./Db');
const STRCONNECTION = 'mongodb+srv://' + DATABASE.US + ':' + DATABASE.PW +'@cluster0-j8xmk.mongodb.net/' + DATABASE.DB + '?retryWrites=true';
const PORT = process.env.PORT || 3000;
const LIMITLINHAS = DATABASE.LIMITLINHAS;

module.exports = { PORT, STRCONNECTION, LIMITLINHAS };