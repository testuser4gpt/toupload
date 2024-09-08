// There are four type of streams in Node
// Readable Stream // Important
// writable Stream // Important
// duplex Stream
// Transform Stream
const http = require("http");
const { readFileSync, readFile, createReadStream } = require("fs");

const port = 8000;
const host = "127.0.0.1";
const server = http.createServer(); // whenever the server is hit. It will raise a request event

// server.on("request", (req, res) => {
//   // It will listen to that request event
//   res.end(readFileSync("./data/big-file.txt", "utf-8"));
// this is a standard approach which makes it slower
//   // for the browser to load data
// });

server.on("request", (req, res) => {
  let rf = createReadStream("./data/big-file.txt");
  rf.on("data", (chunk) => {
    // createReadStream sends the "data" and "error" stream
    res.write(chunk); // It will keep writing until the response buffer is loaded with complete data
    res.end(); // Then it will trigger
  });

  // to handle the error,
  rf.on("error", (err) => {
    res.end(err.message);
  });
});

server.listen(port, host, () => {
  console.log("Server has been started at http://" + host + ":" + port);
});
