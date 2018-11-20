const express = require("express");
const bodyParser = require("body-parser");
const configRoutes = require("./routes")
const exphbs = require("express-handlebars");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
configRoutes(app);

app.listen(3000, () => {
  console.log("Server started.");
  console.log("Routes are available at http://localhost:3000");
  if (process && process.send) process.send({done: true});
});
