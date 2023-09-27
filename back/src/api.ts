import express from "express";
import { Config } from "./interfaces/Config";

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/random-config", (req, res) => {
  const config: Config = {
    samples: Math.floor(Math.random() * 700),
    multiplicationFactor: Math.floor(Math.random() * 100),
  };
  res.json(config);
});

export default app;
