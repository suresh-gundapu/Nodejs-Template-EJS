var express = require('express');
var app = express();
const appRoutes = require('./app/routes/routes');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/',appRoutes);
app.use(express.static(__dirname +"/public"));
app.listen(7070,()=>{
    console.log('server started with port number 7070');
});

var ejs =require('ejs');

app.set("view engine", "ejs");

