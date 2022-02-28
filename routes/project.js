const express = require("express");
const router = express.Router();
const data = require("../data.json");
const projects = data.projects;

router.get("/:id", (req, res) => {
  const project = projects[req.params.id - 1];
  res.render("project", { project });
});

router.get("/", (req, res) => {
  const randomProjectNumber = Math.ceil(Math.random() * projects.length);
  res.redirect(`/project/${randomProjectNumber}`);
});
module.exports = router;
