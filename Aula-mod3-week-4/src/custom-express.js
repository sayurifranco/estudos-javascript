const express = require('express');
const app = express();

const rotas = require('./router');
rotas(app);

module.exports = app;