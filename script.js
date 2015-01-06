//var WebSocket = require('ws');
var ws = new WebSocket('ws://127.0.0.1:8080/');

ws.onmessage = function(event){
    //document.write(event.data);
    console.log(event);
};

function ready(){
    var box = document.getElementById("inputbox");
    console.log('ready!');
	
	box.onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
		console.log(keyCode);
        if (keyCode == '13'){
			ws.send(box.value);
            box.value = "";
            return false;
        }
    }
}