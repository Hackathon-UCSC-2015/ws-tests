//var WebSocket = require('ws');
var ws = new WebSocket('ws://127.0.0.1:8080/');

ws.onmessage = function(event){
    //document.write(event.data);
    console.log(event);
};

function ready(){
    box = document.getElementById("inputbox");
    console.log('ready!');
}

function keydownfn(box){
    if (box.keyCode == '13'){
	ws.send(box.value);
	box.value = "";
    }
    console.log(box);
}
