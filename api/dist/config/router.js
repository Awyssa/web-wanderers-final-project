"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var weekController_1 = __importDefault(require("../controllers/weekController"));
var jobController_1 = __importDefault(require("../controllers/jobController"));
var userController_1 = __importDefault(require("../controllers/userController"));
var router = (0, express_1.Router)();
exports.router = router;
router.get("/", function (req, res) {
    res.status(200).json("API is alive!!!");
});
router.use("/week", weekController_1["default"]);
router.use("/job", jobController_1["default"]);
router.use("/user", userController_1["default"]);
//# sourceMappingURL=router.js.map