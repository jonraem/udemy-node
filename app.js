const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHandlebars = require("express-handlebars");

const adminHandler = require("./routes/admin");
const shopHandler = require("./routes/shop");
const rootDir = require("./utils/rootDir");

const app = express();

app.engine(
  "hbs",
  expressHandlebars({
    layoutsDir: "views/layouts", // Default option
    defaultLayout: "main-layout", // Default option
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
// app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminHandler.routes);
app.use(shopHandler.routes);
app.use((req, res, next) => {
  res.status(404).render("not-found", { layout: false });
});

app.listen(3000);
