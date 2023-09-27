"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var serve_index_1 = __importDefault(require("serve-index"));
var app = (0, express_1.default)();
var port = 3000;
var api_1 = __importDefault(require("./api"));
var publicDir = ".";
app.use(function (req, res, next) {
    console.log(req.method, req.path);
    next();
});
app.use("/api", api_1.default);
app.use(express_1.default.static(publicDir));
app.use((0, serve_index_1.default)(publicDir, { icons: true }));
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
