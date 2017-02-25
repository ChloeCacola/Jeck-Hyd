var http = require("http");

//this is where we go to localhost:port on the computer to see response.end endpoint.
var PORTJECK = 7000;
var PORTHYD = 7500;

//create generic function for handlign requests
//this is a request handler
function handleRequestJECK(request, response) {

	//we will have a response and it will end that will provide info when it comes back.
	response.end("Hey guy, you're my pal, bud. \nYou're pretty, eh.\n" + request.url);
}

function handleRequestHYD(request, response) {

	//we will have a response and it will end that will provide info when it comes back.
	response.end("Hey I'm sorry, y'know, but you're really a tool. \nDon't be such a hoser, eh?\n" + request.url);
}

//server to handle request
//declare that the function passing in as handleRequest is a function that's going to handleRequest for the server
var serverJECK = http.createServer(handleRequestJECK); 
var serverHYD = http.createServer(handleRequestHYD);

//provide port and callback function for listening. (activate the server)
serverJECK.listen(PORTJECK, function() {
	//executed once the server starts listening
	console.log("server listening on http://localhost:%s", PORTJECK)
});

//provide port and callback function for listening. (activate the server)
serverHYD.listen(PORTHYD, function() {
	//executed once the server starts listening
	console.log("server listening on http://localhost:%s", PORTHYD)
});