module.exports = (err, req, res, next) => {
  if (err) {
    console.log("Global Error Handler called", err.status);
  }

  if (err.status === 404) {
    res.status(404).render("not-found", { err });
  } else {
    err.message = `Something went wrong with the server`;
    err.status = 500;
    res.status(err.status || 500).render("error", { err });
  }
};
