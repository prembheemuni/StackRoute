"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const TaskRepository_1 = require("./repositories/TaskRepository");
const TaskService_1 = require("./services/TaskService");
const TaskController_1 = require("./controllers/TaskController");
const TaskRoute_1 = require("./routes/TaskRoute");
tsyringe_1.container.register("ITaskRepository", {
    useClass: TaskRepository_1.TaskRepository,
});
tsyringe_1.container.register("ITaskService", { useClass: TaskService_1.TaskService });
tsyringe_1.container.register("TaskController", {
    useClass: TaskController_1.TaskController,
});
tsyringe_1.container.register("TaskRouter", { useClass: TaskRoute_1.TaskRouter });
