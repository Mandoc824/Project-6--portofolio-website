//this is the global error handling middleware that will take any errors and evaluate them with an the following conditional statement
module.exports = (err, req, res, next) => {
  if (err.status === 404) {
    console.error("Error Code " + err.status + ": " + err.message);
    res.status(404).render("page-not-found", { err });
  } else {
    err.message = `Something went wrong with the server :(`;
    err.status = 500;
    console.error("Error Code " + err.status + ": " + err.message);
    res.status(500).render("error", { err });
  }
};
