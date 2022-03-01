const express = require("express");
const router = express.Router();
const data = require("../data.json");
const projects = data.projects;

//inserts all of the project data from the data.json file and renders the index.pug template with the projects object
router.get("/", (req, res) => {
  res.render("index", { projects });
});

module.exports = router;
