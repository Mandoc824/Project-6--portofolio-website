const express = require("express");
const router = express.Router();
//sets up the get rouer for the about page
//renders the about.pug template when /about is requested
router.get("/", (req, res) => {
  res.render("about");
});
module.exports = router;
