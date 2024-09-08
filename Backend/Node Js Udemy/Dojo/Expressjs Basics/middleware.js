const { readFile, readFileSync } = require("fs");
const morgan = require("morgan");
const express = require("express");

// server, port and ip
let app = express();
const port = 7000;
const host = "127.0.0.1";

// custom middlewares

const logger = function (req, res, next) {
  // the middleware takes 3 arguments: req,res and next
  // they are manadatory* since first arg takes req obj, second arg takes res obj and next is a function to go next

  console.log("Logger middleware has been called");
  next();
};

// middleware calls : to use middlewares we uses .use()

app.use(logger); // logger will be called and executed in this line after the server is hit with req/res

app.use((req, res, next) => {
  // creating a middleware which returns the time when the req was made (we're using arrow function directly inside app.use())
  req.requestedAt = new Date().toISOString(); // manipulating the req obj
  next();
});

app.use(morgan("combined"));
// note how we are using () around third-party middleware,
// reason : they generally returns function as they called
// *check morgan github source code*
// https://github.com/expressjs/morgan/blob/master/index.js
// check line 59 : morgan function / it doesn't return req,res,next
// now check line 103 : morgan function is returning logger as a function with (req,res,next)

const data = JSON.parse(readFileSync("./Data/personal.json"));
// getting response

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/personal-data", (req, res) => {
  res.status(200).json({
    // jsend json formatting
    status: "Success",
    requestedat: req.requestedAt,
    data: {
      // this is called object envloping, obj inside obj
      personalInfo: data,
    },
  });
});
// listening to server

app.listen(port, host, () => {
  console.log(`Server has been started on ${host}:${port}`);
});
