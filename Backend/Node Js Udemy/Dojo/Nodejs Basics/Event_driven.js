const { createServer } = require("http");

const port = 8000;
const host = "127.0.0.1";

const server = createServer(); // this is event emitter, automatically emits request even

server.on("request", (req, res) => {
  // on method is the event listener, it will listen to "request" event emitted by event emitter
  // then the  callback function here is the event handler which will handle the event
  res.end("Welcome to Event Driven approach of Node !");
});

server.listen(port, host, () => {
  console.log("Server Has been started");
});
