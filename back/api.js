const express = require("express");

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({ samples: 50, multiplicationFactor: 50 });
});
module.exports = app;
