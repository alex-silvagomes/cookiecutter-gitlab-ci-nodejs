const express = require('express');
const router = express.Router();
var path = require('path');
const packagejson = require('../../package.json')

//================== Official API Call ==================\\
router.get('/', function (req, res) {

  console.log("(GET) Index: Home Page");

  var statusServer = {
    server: {
      api_name: "{{ cookiecutter.project_name }}",
      version: packagejson.version,
      status: "Online"
    }
  }

  
  // JSON
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(statusServer).end();
  

});


module.exports = router;