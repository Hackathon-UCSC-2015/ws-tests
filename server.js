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

function passwordMatches(users, name, password)
{
    return users[name] === password;
}

var userlist = {}
userlist['timmy'] = "foobar";

wss.on('connection', function (ws){
    console.log("user "+usercount+" connected");
    ws.on('message', function (message){
	var data = JSON.parse(message);
	if (data.type === "login"){
	    if (passwordMatches(userlist, data.username, data.password))
	    {
		ws.loggedin = true;
	    }
	} else if (user.loggedin) {
	    console.log('got %s', message);
	    wss.broadcast(ws.username+": "+message);
	}
    });
    ws.username = "User"+usercount++;
    ws.send("Hello");
});
