"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default.Router();
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.get("/random-config", function (req, res) {
    res.json({
        sample: Math.floor(Math.random() * 700),
        multiplicationFactor: Math.floor(Math.random() * 100),
    });
});
exports.default = app;
