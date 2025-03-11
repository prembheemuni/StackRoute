"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRouter = void 0;
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../controllers/TaskController");
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
let TaskRouter = class TaskRouter {
    //   private readonly taskController: TaskController;
    constructor(taskController) {
        this.taskController = taskController;
        this.router = express_1.default.Router();
        // this.taskController = new TaskController(
        //   new TaskService(new TaskRepository())
        // );
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.taskController.getAllTasks.bind(this.taskController));
        this.router.post("/", this.taskController.createTask.bind(this.taskController));
        this.router.get("/duedate", this.taskController.getSortedDataForDueDate.bind(this.taskController));
        this.router.get("/count/category", this.taskController.getTaskCountPerCategory.bind(this.taskController));
        this.router.put("/:id", this.taskController.updateTask.bind(this.taskController));
        this.router.get("/:id", this.taskController.getSingleTask.bind(this.taskController));
        this.router.delete("/:id", this.taskController.deleteTask.bind(this.taskController));
    }
    getRouter() {
        return this.router;
    }
};
exports.TaskRouter = TaskRouter;
exports.TaskRouter = TaskRouter = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("TaskController")),
    __metadata("design:paramtypes", [TaskController_1.TaskController])
], TaskRouter);
