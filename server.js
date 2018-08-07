var http = require("http");

var PORTone = 7000;
var PORTtwo = 7500;

function handleRequestOne(request, response) {
    response.end("You suck" + request.url);
}

function handleRequestTwo(request, response) {
    response.end("You're the goat" + request.url);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo)

serverOne.listen(PORTone, function() {
    console.log("Server listening on: http://localhost:" + PORTone);
});

serverTwo.listen(PORTtwo, function() {
    console.log("Server listening on: http://localhost:" + PORTtwo);
});
