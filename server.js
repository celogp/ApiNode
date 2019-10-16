const express = require('express');
const mongoose = require('mongoose');
const cfg = require('./src/config/App');
const requireDir = require('requiredir');
const cors = require('cors');

const PORT = cfg.PORT;
const strConnection = cfg.STRCONNECTION;
const app = express();
//
//Schemas / Models
//
requireDir('./src/models');
// Middleware
app.use(express.urlencoded(
{ extended: true }));
app.use(express.json());
app.use(cors());
//
//Rotas
//
app.use("/api", require("./src/routes"));
//
//Conecta no banco de dados
//
mongoose.connect(strConnection, { useNewUrlParser: true}, () => {
    console.log('conectado no Mongo.');
});
//
//Instancia o servidor
//
app.listen(PORT, () => {
     console.log('conectado no servidor na porta :', PORT);
});