const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//The above code is a simple Node.js HTTP server that responds with a JSON message. However, it lacks error handling and might throw an exception if something goes wrong during execution. For example, if there is a problem listening on the port, the server will crash without any meaningful error message.