const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:8081",
      "https://jamb-pathfinder-admin.vercel.app"
    ],
    credentials: true,
  })
);
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const routes = require('./routes');
app.use('/api', routes);

module.exports = app;
