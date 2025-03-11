import { ITask, Task } from "../models/TaskModel";
import { IGroupTaskCategory, ITaskRepository } from "./ITaskRepository";

export class TaskRepository implements ITaskRepository {
  async createTask(task: ITask): Promise<ITask> {
    const { dueDate } = task;
    const duedate = dueDate ? new Date(dueDate) : undefined;
    const newTask = new Task({ ...task, dueDate: duedate });
    return await newTask.save();
  }
  async getAllTasks(): Promise<ITask[]> {
    return await Task.find();
  }
  async getSingleTask(id: string): Promise<ITask | null> {
    return await Task.findById(id);
  }
  async updateTask(id: string, task: ITask): Promise<ITask | null> {
    return await Task.findByIdAndUpdate(id, { ...task });
  }
  async deleteTask(id: string): Promise<ITask | null> {
    return await Task.findByIdAndDelete(id);
  }

  async getFilteredTasks(filterObject: Record<string, any>): Promise<ITask[]> {
    return await Task.find(filterObject);
  }

  async getSortedDataForDueDate(sortOrder: "asc" | "dsc"): Promise<ITask[]> {
    if (sortOrder === "asc") return await Task.find().sort({ dueDate: 1 });
    else return await Task.find().sort({ dueDate: -1 });
  }

  async getTaskCountPerCategory(): Promise<IGroupTaskCategory[] | null> {
    return await Task.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);
  }
}
