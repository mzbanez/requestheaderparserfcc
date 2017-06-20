
var express = require('express');
var app = express();
//var moment = require('moment');
var path = require('path');
var requestIp = require('request-ip');
var accepts = require('accepts');


app.get('/api/whoami', function(req,res) {
  var ipaddress, locale, software;
  ipaddress = requestIp.getClientIp(req) ;
  locale = accepts(req).headers["accept-language"].split(',')[0].trim();
  software = req.headers['user-agent'].split(/[\(\)]/)[1];
  
    res.json({
      ipaddress: ipaddress,
      language: locale,
      software: software
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
