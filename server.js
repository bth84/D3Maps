var express = require('express');
var app = express();

app.set('views',__dirname + '/views');

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/wm.html');
});

app.get('/world-110m.json', function (req, res) {
  res.sendFile(__dirname+'/world-110m.json');
});

app.get('/world-country-names.tsv', function (req, res) {
  res.sendFile(__dirname+'/world-country-names.tsv');
});

app.get('/*', function (req, res) {
  res.redirect('/');
});
  
app.listen(5000, function(){
  console.log("app.js listening on port 5000")
})