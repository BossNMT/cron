const cron = require('node-cron');
var request = require('request');

cron.schedule("*/5 * * * * *", function () {
  request('http://localhost:3000/cron', {
    method: 'GET',
  }, async function (error, response, body) { 
    console.log('body', body);
  })
});