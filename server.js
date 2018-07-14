const express = require("express");
const mongoose = require("mongoose");

const app = express();

// db config

const db = require("./config/keys").mongoURI;

// connects to mongo db

mongoose
  .connect(db)
  .then(() => console.log("Mongoose connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("It works"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
