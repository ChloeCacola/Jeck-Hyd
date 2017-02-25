var http = require("http");

var PORT = 8080;

//create generic function for handlign requests
function handleRequest(request, response) {
	//paramaters are what you define^
	//if you call handle request later, it will be an argument used to handle the function.
	//--//

	//we will have a response and it will end that will provide info when it comes back.
	response.end("It works on path " + request.url);
	//the reqeust property has an object of URL.
}

//server to handle request
//declare that the function passing in as handleRequest is a function that's going to handleRequest for the server
var server = http.createServer(handleRequest); 

//provide port and callback function for listening.
server.listen(PORT, function() {
	console.log("server listening on http://localhost:%s", PORT)
});