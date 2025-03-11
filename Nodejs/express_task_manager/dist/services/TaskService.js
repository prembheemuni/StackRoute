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
exports.TaskService = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.taskRepository.createTask(task);
            if (!result) {
                throw new Error("Error while creating Task");
            }
            return result;
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.getAllTasks();
        });
    }
    getFilteredTasks(filterObject) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.getFilteredTasks(filterObject);
        });
    }
    getSingleTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskRepository.getSingleTask(id);
            if (!task) {
                throw new Error("Error while geting the task");
            }
            return task;
        });
    }
    updateTask(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTask = yield this.taskRepository.updateTask(id, task);
            if (!updatedTask) {
                throw new Error("Error while updating the task");
            }
            return updatedTask;
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTask = yield this.taskRepository.deleteTask(id);
            if (!deletedTask) {
                throw new Error("Error while deleting the task");
            }
            return deletedTask;
        });
    }
    getSortedDataForDueDate(sortOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.getSortedDataForDueDate(sortOrder);
        });
    }
    getTaskCountPerCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.getTaskCountPerCategory();
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("ITaskRepository")),
    __metadata("design:paramtypes", [Object])
], TaskService);
