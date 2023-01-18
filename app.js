// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// Bookmarks ROUTES
const bookmarksController = require("./controllers/bookmarksController");
app.use("/bookmarks", bookmarksController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

// EXPORT
module.exports = app;
