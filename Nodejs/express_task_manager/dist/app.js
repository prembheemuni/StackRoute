"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const TaskRoute_1 = require("./routes/TaskRoute");
require("./di-container");
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const app = (0, express_1.default)();
mongoose_1.default.connect(config_1.ServerConfig.MONGO_URI);
mongoose_1.default.connection
    .once("open", () => {
    console.log("Connected to DB");
})
    .on("error", (err) => {
    console.log(err);
});
app.use(express_1.default.json());
// const taskRouter = new TaskRouter();
const taskRouter = tsyringe_1.container.resolve(TaskRoute_1.TaskRouter);
app.use("/api/task", taskRouter.getRouter());
exports.default = app;
