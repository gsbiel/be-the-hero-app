const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);    // Esse comando deve estar sempre abaixo do express.json();

const PORT = 3333;;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);