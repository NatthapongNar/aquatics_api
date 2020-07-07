const express = require("express");
const http = require('http');
// const https = require('https');
const bodyParser = require("body-parser");
// const jwt = require('jsonwebtoken');
const cors = require("cors");
// const morgan = require("morgan");
const { config } = require('./src/config');
const { getMasterSchools, getMasterClasses, createLeadCustomer } = require('./src/api');

// var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
// var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
// var credentials = { key: privateKey, cert: certificate };

const app = express();
const path_uri = '/aquatics_api';

// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

app.use(cors({ origin: "http://localhost:8081" }));
// app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'))

app.get(path_uri + '/', function (req, res) {
    var message = 'It works!\n';
    res.end(message);
});

app.get(path_uri + '/masterschools', getMasterSchools)
app.get(path_uri + '/masterclasses', getMasterClasses)
app.post(path_uri + '/create_lead', createLeadCustomer)

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// set port, listen for requests
// app.listen(config.port, () => { console.log(`Server is running on port ${config.port}.`) });
httpServer.listen(config.port);