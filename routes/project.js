const express = require("express");
const router = express.Router();
const data = require("../data.json");
const projects = data.projects;

//gets the project dynamically from the data.json file and renders them to the page with the project.pug template
router.get("/:id", (req, res) => {
  const project = projects[req.params.id - 1];
  res.render("project", { project });
});

//when the /project path is requested, it redirects users to a random project
router.get("/", (req, res) => {
  const randomProjectNumber = Math.ceil(Math.random() * projects.length);
  res.redirect(`/project/${randomProjectNumber}`);
});
module.exports = router;
