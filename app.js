var express = require('express');
var app = express();

var hbs = require('hbs');

var state = require('./state');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());

app.get('/', function(request, response) {
  state.addMessage(new Date());
  response.render('index', {title:"Hello", messages: state.getMessages()});
});

app.listen(8625);
