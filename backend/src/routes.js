const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send("<h1> Hellooo world! <h1>");
});

module.exports = routes;