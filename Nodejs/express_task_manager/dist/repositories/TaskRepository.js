"use strict";
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
exports.TaskRepository = void 0;
const TaskModel_1 = require("../models/TaskModel");
class TaskRepository {
    createTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dueDate } = task;
            const duedate = dueDate ? new Date(dueDate) : undefined;
            const newTask = new TaskModel_1.Task(Object.assign(Object.assign({}, task), { dueDate: duedate }));
            return yield newTask.save();
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskModel_1.Task.find();
        });
    }
    getSingleTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskModel_1.Task.findById(id);
        });
    }
    updateTask(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskModel_1.Task.findByIdAndUpdate(id, Object.assign({}, task));
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskModel_1.Task.findByIdAndDelete(id);
        });
    }
    getFilteredTasks(filterObject) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskModel_1.Task.find(filterObject);
        });
    }
    getSortedDataForDueDate(sortOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sortOrder === "asc")
                return yield TaskModel_1.Task.find().sort({ dueDate: 1 });
            else
                return yield TaskModel_1.Task.find().sort({ dueDate: -1 });
        });
    }
    getTaskCountPerCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TaskModel_1.Task.aggregate([
                { $group: { _id: "$category", count: { $sum: 1 } } },
            ]);
        });
    }
}
exports.TaskRepository = TaskRepository;
