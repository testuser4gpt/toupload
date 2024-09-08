const fs = require("fs");
const http = require("http");

const html_file = fs.readFileSync("./templates/Index.html", "utf-8");
// Note that make it sync so that js thread won't go any further from this point until the html is loaded

// Creating a server

const server = http.createServer((request, response) => {
  // this call back function is executed everytime a new req hits the server
  //response.end("Hello from the local host port 8000");
  response.end(html_file);
  console.log("A new request received");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started");
});
