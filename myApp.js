var express = require('express');
var app = express();

/*app.get("/", (req, res) => {
  res.send("Hello Express");
});*/

app.get("/", (req, res) => {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath)
});

app.get("/json", (req, res) => {
  res.json({"message": "Hello json"})
});

assetsPath = __dirname + '/public';

app.use('/public', express.static(assetsPath));





































 module.exports = app;
