const getNotFound = (req, res, next) => {
  res.status(404).render("not-found", { pageTitle: "Page not found" });
};

module.exports = { getNotFound };
