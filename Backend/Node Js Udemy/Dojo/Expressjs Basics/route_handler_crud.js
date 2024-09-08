// requisites
const express = require("express");
let app = express();
const { readFileSync, readFile, writeFile } = require("fs");
let movies = JSON.parse(readFileSync("./Data/movies.json"));
app.use(express.json());

// Route Handler Functions

const getallapi = (req, res) => {
  res.status(200).json({
    status: "success",
    count: movies.length,
    data: {
      movies: movies,
    },
  });
};

const getMovie = (req, res) => {
  const id = req.params.id;
  let movie = movies.find((el) => el.id === id);

  if (!movie) {
    return res.status(404).send("404 Data Not found !");
  }

  res.status(200).json({
    status: "success",
    data: {
      movie: movie,
    },
  });
};

const createMovie = (req, res) => {
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
};

const updateMovie = (req, res) => {
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
};

const deleteMovie = (req, res) => {
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
};

// exporting modules

module.exports = {
  getallapi,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
