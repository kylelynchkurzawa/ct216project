var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send("Hello World!");
});

app.get('/api', function(request, response) {
  response.send({name: "Raymond", age: 40});
});

app.listen(8625);
