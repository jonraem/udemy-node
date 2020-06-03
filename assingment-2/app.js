const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("In the /users path!");
  res.send("<h1>Express: /users</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In the root path!");
  res.send("<h1>Express: /</h1>");
});

app.listen(3000);
