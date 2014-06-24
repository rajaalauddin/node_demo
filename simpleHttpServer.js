var http = require('http');

var server = http.createServer(function(onRequest, response) {

	response.writeHead(200, { 'Content-Type': 'text/plain'});
	response.write('This is a simple http server');
	response.end();
}).listen(3000);