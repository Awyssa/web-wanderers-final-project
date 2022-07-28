"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
// import  { Request, Response } from "express";
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var router_1 = require("./config/router");
var port = process.env.PORT || 4000;
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.get("/", function (req, res) { return res.send("I'm alive!"); });
// Route to all of our api routes.
app.use("/api", router_1.router);
app.listen(port, function () { return console.log("Listening on port ".concat(port)); });
//# sourceMappingURL=index.js.map