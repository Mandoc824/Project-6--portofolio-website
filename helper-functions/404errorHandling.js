//this is the 404 error hanlder
//after its caught by express, it will run and then it will be passed onto the next piece of middleware which is the global error handler
module.exports = (req, res, next) => {
  const err = new Error("Page not found");
  err.status = 404;
  err.message = "page not found";
  // console.error("Error Code " + err.status + ": " + err.message);
  // res.status(404).render("not-found", { err });
  next(err);
};
