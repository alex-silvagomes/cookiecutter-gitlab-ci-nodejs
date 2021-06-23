'use strict';

// Library
const express = require('express');
const formData = require('express-form-data');
const path = require('path');
const fs = require('fs');
var https = require('https');
var http = require('http');

const options = {
  key: fs.readFileSync('certs/key.pem', 'utf8'),
  cert: fs.readFileSync('certs/cert.pem', 'utf8')
};

//Import Routes Here
const info = require('./routes/api/info.js')
const index = require('./routes/api/index.js')

// Create a service (the app object is just a callback).
var app = express();

// Init Middleware
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.use(formData.parse())

//Define Routes
app.use('/api', info);
app.use('/', index);

app.use(express.static(path.join(__dirname, "public")));

//Serve Static assets in production
//Configuration for Express to behave correctly in production environment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}
 
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 443;

const hostname = '127.0.0.1';

// Create an HTTPS service identical to the HTTP service.
var server = http.createServer(app).listen(HTTP_PORT, () => {

  console.log('Servidor rodando em http://%s:%s', hostname, HTTP_PORT);

});

// Create an HTTPS service identical to the HTTP service.
var server_https = https.createServer(options, app).listen(HTTPS_PORT, () => {
  console.log('Servidor rodando em https://%s:%s', hostname, HTTPS_PORT);
});

module.exports = app;
