const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminHandler = require("./routes/admin");
const shopHandler = require("./routes/shop");
const rootDir = require("./utils/rootDir");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminHandler.routes);
app.use(shopHandler.routes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

app.listen(3000);
