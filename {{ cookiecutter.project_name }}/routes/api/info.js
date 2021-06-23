const express = require('express');
const router = express.Router();
const listUsers = require('./listUsers');


//================== Official API Call ==================\\
router.get('/health', async function (req, res) {

  res.setHeader("Content-Type", "application/json");
  

  const healthcheck = {
    server: {
      status: "Online",
      message: 'OK',
      stats: serverStats(),
      timestamp: Date.now()
    }
  };

  // RESPONSE ENDPOINT
  try {
    console.log("(GET) /api/health: ", JSON.stringify(healthcheck));
    res.status(200).send(healthcheck).end();
  } catch (e) {
    healthcheck.server_status = "Offline";
    healthcheck.message = e;
    res.status(404).send(healthcheck).end();
  }
});

router.get('/list-users', async function (req, res) {
  console.log("(GET) /api/list-users: ", JSON.stringify(listUsers));

  res.setHeader("Content-Type", "application/json");
  
  res.status(200).send(listUsers).end();
});

function convertToTimeString(seconds) {

  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds - (hours * 3600)) / 60);
  seconds = seconds - (hours * 3600) - (minutes * 60);
  var time = "";

  if (hours != 0) {
    time = hours + ":";
  }
  if (minutes != 0 || time !== "") {
    minutes = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
    time += minutes + ":";
  }
  if (time === "") {
    time = seconds + "s";
  }
  else {
    time += (seconds < 10) ? "0" + seconds : String(seconds);
  }
  return time;
}

function memoryUsage() {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  const text = `${Math.round(used * 100) / 100}MB`;

  return text
}

function serverStats() {
  var osutils = require("os-utils");

  var server_stats = {
    platform: osutils.platform(),
    number_of_cpu: osutils.cpuCount(),
    cpu_percent_usage: osutils.cpuUsage(function (v) {
      return v;
    }),
    load_average: osutils.loadavg(5),
    memory_total: `${osutils.totalmem()}MB`,
    memory_free: `${osutils.freemem()}MB`,
    memory_free_percent: `${Math.round(osutils.freememPercentage() * 100)}%`,
    memory_usage: memoryUsage(),
    uptime: convertToTimeString(process.uptime())
  }

  return server_stats;
}

module.exports = router;