var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8080});

wss.on('connection', function (ws){
    console.log("Welcome person");
    ws.on('message', function (message) {
	console.log('got %s', message);
    });
    ws.send("Hello");
});

//inconsiquential change