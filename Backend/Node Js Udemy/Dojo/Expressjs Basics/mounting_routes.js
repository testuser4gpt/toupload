const express = require("express");

let app = express();
const port = 7000;
const host = "127.0.0.1";

const logger = function (req, res, next) {
  console.log("Logger middleware has been called");
  next();
};

//app.use("/api", logger); // we can mount the middleware to a particular route as well

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/api", logger, (req, res) => {
  res.send("Hello api");
}); // logger middleware will be called only for this route and it's subroutes
// after placing logger middleware directly into this route handler. middleware will not be trigger for its subroutes

app.get("/api/new", (req, res) => {
  res.send("Hello new api");
}); // logger will be called here as well. so it's recommended to mount middleware to a particular route only
// after adding middleware to "/api" route handler directly, logger will not be trigger in this handler
app.listen(port, host, () => {
  console.log(`Server has been started on ${host}:${port}`);
});
