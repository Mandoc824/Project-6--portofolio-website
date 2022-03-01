//requering all depencies needed for the app
const express = require("express");
const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");
const projectRoute = require("./routes/project.js");
const data = require("./data.json");
const errorHandlerGlobal = require("./helper-functions/errorHandling.js");
const errorhandler404 = require("./helper-functions/404errorHandling.js");
const project = data.projects;
const app = express();
const port = 3000;

//setting all the routes to be used by express, the error handling middleware and the view engine being set to pug so the templates can be rendered.
app.use("/", indexRoute);
app.use("/about", aboutRoute);
app.use("/project", projectRoute);
app.use("/static", express.static("public"));
app.use(errorhandler404);
app.use(errorHandlerGlobal);
app.set("view engine", "pug");

//sets up a port for the server
app.listen(port, () => {
  console.log("The server is up and running on localhost:3000");
});
