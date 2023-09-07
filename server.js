const path = require("path"); // Corrected the 'require' statement.
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes/api");
const router = express.Router(); // Corrected the 'require' statement.
const sequelize = require("./config/config"); // Corrected the 'require' statement.

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs.engine); // Corrected 'wxphbs' to 'exphbs'.
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

sequelize.sync({ force: false }).then(() => {
  // Corrected 'sequalize' to 'sequelize'.
  app.listen(PORT, () => console.log("Now listening"));
});
