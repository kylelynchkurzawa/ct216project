var express = require('express');
var app = express();

var times = [];

app.get('/', function(request, response) {
  // Record the new access time
  times.push(new Date());
  
  var message = "Hello world!<br>Visited at:<br>";
  for(var i = 0; i < times.length; ++i) {
    message += times[i];
    message += "<br>";
  }
  response.send(message);
});

app.listen(8625);
