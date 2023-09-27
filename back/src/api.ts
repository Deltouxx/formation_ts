import express from "express";

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/random-config", (req, res) => {
  res.json({
    sample: Math.floor(Math.random() * 700),
    multiplicationFactor: Math.floor(Math.random() * 100),
  });
});

export default app;
