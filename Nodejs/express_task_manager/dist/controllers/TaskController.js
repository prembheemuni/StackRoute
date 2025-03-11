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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTask = yield this.taskService.createTask(req.body);
                res.status(201).json({ success: true, data: newTask });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (Object.keys(req.query).length > 0) {
                    const tasksByStatus = yield this.taskService.getFilteredTasks(req.query);
                    res.status(200).json({ success: true, data: tasksByStatus });
                }
                else {
                    const allTasks = yield this.taskService.getAllTasks();
                    res.status(200).json({ success: true, data: allTasks });
                }
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    getSingleTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const singleTask = yield this.taskService.getSingleTask(req.params.id);
                res.status(200).json({ success: true, data: singleTask });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedTask = yield this.taskService.updateTask(req.params.id, req.body);
                res.status(200).json({ success: true, data: updatedTask });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedTask = yield this.taskService.deleteTask(req.params.id);
                res.status(200).json({ success: true, data: deletedTask });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    getSortedDataForDueDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { sorted } = req.query;
                if (!sorted)
                    res.status(400).json({ message: "Please provide sorted param" });
                const sortedTasks = yield this.taskService.getSortedDataForDueDate(sorted);
                res.status(200).json({ success: true, data: sortedTasks });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
    getTaskCountPerCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.taskService.getTaskCountPerCategory();
                res.status(200).json({ success: true, data: response });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    }
};
exports.TaskController = TaskController;
exports.TaskController = TaskController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("ITaskService")),
    __metadata("design:paramtypes", [Object])
], TaskController);
