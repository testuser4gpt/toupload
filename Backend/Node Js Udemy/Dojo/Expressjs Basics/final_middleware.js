const express = require("express");
const { readFileSync } = require("fs");

let app = express();
module.exports = app;
const personalData = JSON.parse(readFileSync("./Data/personal.json"));

// Middlewares

app.use(express.static("./static"));
// rendering static files, be default we cannot so we use this middleware, now we can connect css to out html

// const router = express.Router();
// app.use("/", router);

// router.param("id", (req, res, next, value) => {
//   // the fourth parameter "value" will store the parameter value we pass as first arg "id" in this case
//   console.log(`Person Account Id is : ${value}`);
//   next();
// });
// I don't understand these

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/:id", (req, res) => {
  const Id = parseInt(req.params.id);
  const DataCheck = personalData.find((el) => el.accId === Id);
  if (!DataCheck) {
    return res.status(404).send("404 error. Account Id does'nt match");
  }
  const AccountData = personalData[Id - 1];
  res.status(200).json({
    status: "Success",
    data: {
      accData: AccountData,
    },
  });
});
