var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('hello waffle world');
})

app.listen(4545, function(){
  console.log('Listening on port 4545');
})