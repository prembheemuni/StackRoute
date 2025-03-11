import mongoose, { Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  category: "Electronics" | "Clothes" | "Food" | "Travel";
  dueDate?: Date;
  status: "Pending" | "Completed";
}

const taskSchema = new mongoose.Schema({
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

export const Task = mongoose.model<ITask>("Task", taskSchema);
