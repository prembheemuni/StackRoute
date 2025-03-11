"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    category: {
        type: String,
        enum: ["Electronics", "Clothes", "Food", "Travel"],
        required: true,
    },
    dueDate: { type: Date, required: false },
    status: { type: String, enum: ["Pending", "Completed"], required: true },
});
exports.Task = mongoose_1.default.model("Task", taskSchema);
