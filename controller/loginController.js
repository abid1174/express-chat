// render login page
function renderLoginPage(req, res, next) {
  res.render("index", {
    title: "Login - Express Chat",
  });
}

module.exports = {
  renderLoginPage,
};
