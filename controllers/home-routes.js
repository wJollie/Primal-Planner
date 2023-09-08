const router = require("express").Router();
const sequelize = require("../config/config");

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signUp");
});

router.get("*", (req, res) => {
  res.status(404).send("Can't go there!");
});

module.exports = router;
