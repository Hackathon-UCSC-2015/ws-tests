var express = require('express');
var app = express();
app.use(express.static(__dirname+'/files'));
app.listen(3000, function(){
    
});

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8080});

wss.broadcast = function(data){
    wss.clients.forEach(function(client){
	client.send(data);
    });
};

var usercount = 0;

wss.on('connection', function (ws){
    console.log("Welcome person");
    ws.on('message', function (message) {
	console.log('got %s', message);
	wss.broadcast(ws.customname+": "+message);
    });
    ws.customname = "User"+usercount++;
    ws.send("Hello");
});
