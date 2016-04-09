//var express = require('express');
//var app = express();
//var PORT = process.env.port;
//
//var middleware = require('./middleware');
//
//
//app.use(middleware.logger);
////app.use(middleware.requireAuthentication);
//
////app.get('/', function(req, res)
////{
////    res.send('Hello Express!');
////})
//
//app.get('/about', middleware.requireAuthentication, function(req, res)
//{
//    res.send('About us!');
//})
//
//app.use(express.static(__dirname+'/public'));
//
//app.listen(PORT, function()
//{
//    console.log('Express server started at port: ' + PORT +'!');
//});
var http = require("http");
var PORT = process.env.PORT;

var server = http.createServer(function(req, res){
        req.end("hello world!! HEROKU");
});

server.listen(PORT);
