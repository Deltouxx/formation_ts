const express = require("express");

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/random-config", (req, res) => {
  res.json({
    sample: Math.randomInt(700),
    multiplicationFactor: Math.random() * 100,
  });
});
module.exports = app;
