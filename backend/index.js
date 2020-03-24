const express = require('express');
const app = express();

const PORT = 3333;;
const HOST = '0.0.0.0';

app.get('/', (request, response) => {
    return response.send("<h1> Hello world! <h1>");
});

app.listen(PORT, HOST);