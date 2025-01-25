# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled exceptions in HTTP servers. The `bug.js` file contains a simple HTTP server that lacks proper error handling.  When the server fails to start (e.g., due to port conflict), it crashes without providing helpful diagnostic information.

The `bugSolution.js` file shows how to improve the code by incorporating error handling using `server.on('error', ...)` to gracefully handle such situations and provide informative error messages.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.  The server should start successfully if port 8080 is available.
3. While the server is running, try running it again; this time, it should fail because the port is already in use.
4. Observe the error message (or lack thereof) in the console.
5. Run `node bugSolution.js` to see the improved, more robust version.