const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const apiRoutes = require("./routes/api/apiRoutes");
const helpers = require("./utils/helpers.js");
const sequelize = require("./config/config");

const app = express();
const PORT = process.env.PORT || 3001;

// Set up express-handlebars with custom helpers
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Set up express-session
app.use(
  session({
    secret: "your-secret-key", // Replace with a strong, random key
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Specify the path to the layouts directory
app.set("views", path.join(__dirname, "views"));

// Set the layout to use for all views (optional)
app.set("view options", { layout: "layouts/main" });

// Define a route handler for the root URL ("/") to render signUp.handlebars
app.get("/", (req, res) => {
  res.render("signUp", {
    pageTitle: "Sign Up",
    pageClass: "signUp",
  }); // Load the "signUp.handlebars" view
});
// This route handler renders the signup page on page load. Needs to be changed to render home page when Keller is done making it

app.get("/signUp", (req, res) => {
  res.render("signUp", {
    pageTitle: "Sign Up",
    pageClass: "signUp",
  }); // Load the "signUp.handlebars" view
});

app.get("/login", (req, res) => {
  res.render("login", {
    pageTitle: "Log In",
    pageClass: "login",
  }); // Load the "login.handlebars" view
});

// Use the API routes
app.use("/api", apiRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
