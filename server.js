var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./api/time.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

api(app);

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
