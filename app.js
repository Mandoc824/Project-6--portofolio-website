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

app.use("/", indexRoute);
app.use("/about", aboutRoute);
app.use("/project", projectRoute);
app.use("/static", express.static("public"));
app.use(errorhandler404);
app.use(errorHandlerGlobal);
app.set("view engine", "pug");

app.listen(port, () => {
  console.log("hi im up");
});
