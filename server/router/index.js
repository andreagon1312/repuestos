const express = require('express');
const router = express.Router();

function routerAPI(app){
    app.use('/api/v1', router);
};

module.exports = routerAPI;