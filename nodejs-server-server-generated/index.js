'use strict';

const databaseUrl = 'mongodb://localhost:27017/petsitter_db';

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

const mainApp = express();

mainApp.use('/', express.static(path.join(__dirname, '../frontend/build')));
mainApp.get(/\/app\/?.*/, (req, res, next) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);

// expressAppConfig.addValidator();
var oasApp = expressAppConfig.getApp();

console.log('oasApp', oasApp);

mainApp.use('/api', oasApp);

// Initialize the Swagger middleware
http.createServer(mainApp).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

