const express = require("express");
let app = express();
const { readFileSync, readFile, writeFile } = require("fs");

const port = 5000;
const host = "127.0.0.1";
let movies = JSON.parse(readFileSync("./Data/movies.json")); // converts json string to a javascript object
// JSON.stringify() // converts javascript object to a json string

app.use(express.json()); // Middleware,

app.get("/api/movie", (req, res) => {
  res.status(200).json({
    status: "success", // doing jsend json formatting
    count: movies.length,
    data: {
      movies: movies,
    },
  });
  // provides a consistent structure for the data returned by an API
});

app.get("/api/movie/:id", (req, res) => {
  // can use more params, also can make them optional : /api/movie/:id/IAN?
  // This ? is responsible for making it optional and it will return the data undefined at those parameters
  const id = req.params.id; // parseInt(req.params.id) if needed the id in string
  let movie = movies.find((el) => el.id === id);
  // find() iterate the movies and stores the object of every iteration in (el)
  // If nothing matches in all iteration, find() will return undefined

  if (!movie) {
    // undefined is a falsy value therefore to handle the empty object bug when no id matches we do If here
    return res.status(404).send("404 Data Not found !"); // used return so that the response under it won't execute
  }

  res.status(200).json({
    status: "success",
    data: {
      movie: movie,
    },
  });
});

app.post("/api/movie", (req, res) => {
  const new_id = movies[movies.length - 1].id + 1; // This is a stateless approach
  const new_movie = Object.assign({ id: new_id }, req.body);
  movies.push(new_movie);

  writeFile("./Data/movies.json", JSON.stringify(movies), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        movie: new_movie,
      },
    });
  });
  // every post data comes inside req.body, but to attach the data to res.body
  // we need a middleware (line 10)

  //console.log(req.body);
  //res.send("Created ! "); These are working now
});

app.patch("/api/movie/:id", (req, res) => {
  const id = req.params.id;
  const movietopatch = movies.find((el) => el.id === id);
  if (!movietopatch) {
    return res.status(404).send("404 Data not Found !");
  }
  const movie_index = movies.indexOf(movietopatch);

  Object.assign(movietopatch, req.body);
  movies[movie_index] = movietopatch;

  writeFile("./Data/movies.json", JSON.stringify(movies), (err) => {
    res.status(200).json({
      status: "success",
      data: {
        movie: movietopatch,
      },
    });
  });
});

app.delete("/api/movie/:id", (req, res) => {
  const id = req.params.id;
  const movietodel = movies.find((el) => el.id === id);
  if (!movietodel) {
    return res.status(404).send("404 Data not Found !");
  }
  const movie_index = movies.indexOf(movietodel);

  movies.splice(movie_index, 1); // mutates the original array

  writeFile("./Data/movies.json", JSON.stringify(movies), (err) => {
    res.status(204).json({
      status: "success",
      data: {
        movie: null,
      },
    });
  });
});

app.listen(port, () => {
  console.log("The server has been started !");
});
