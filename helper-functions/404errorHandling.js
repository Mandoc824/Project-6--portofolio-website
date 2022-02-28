module.exports = (req, res, next) => {
  const err = new Error("Page not found");
  err.status = 404;
  err.message = "page not found";
  res.status(404).render("not-found", { err });
};
