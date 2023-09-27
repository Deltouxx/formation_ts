const express = require("express");

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/random-config", (req, res) => {
  res.json({ samples: 500, multiplicationFactor: 14.5 });
});
module.exports = app;
