const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRoutes = require("./routes/users");
const indexRoutes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(usersRoutes);
app.use(indexRoutes);

app.listen(3000);
