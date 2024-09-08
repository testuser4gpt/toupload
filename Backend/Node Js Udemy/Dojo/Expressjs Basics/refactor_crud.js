const express = require("express");
let app = express();

const {
  getallapi,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("./route_handler_crud");

const port = 5000;
const host = "127.0.0.1";
app.use(express.json());

// api callbacks
// app.get("/api/movie", getallapi); // Matches getallapi function
// app.get("/api/movie/:id", getMovie); // Matches getMovie function
// app.post("/api/movie", createMovie); // Matches createMovie function
// app.patch("/api/movie/:id", updateMovie); // Matches updateMovie function
// app.delete("/api/movie/:id", deleteMovie); // Matches deleteMovie function

app.route("/api/movie").get(getallapi).post(createMovie);

app
  .route("/api/movie/:id")
  .get(getMovie)
  .patch(updateMovie)
  .delete(deleteMovie);

// Can use .route and chain the similar endpoints like this

app.listen(port, () => {
  console.log("The server has been started !");
});
