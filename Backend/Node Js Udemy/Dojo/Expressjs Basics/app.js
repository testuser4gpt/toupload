const express = require("express");
let app = express();

// this is route handler
app.get("/", (req, res) => {
  //res.status(200).send("Hello From Express");
  // when we use .send() method then in response header, it's content type is text/hmtl
  // so if you want to send json or any other file use .json()
  res.status(200).json({ Item1: "dabur", Item2: "Patanjali" });
  // here in response header the content type will be select as application/json
});

// Create a server
let port = 5000;
app.listen(port, () => {
  console.log("server has been started");
});
