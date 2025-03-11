import { ITask } from "../models/TaskModel";

export interface IGroupTaskCategory {
  _id: string;
  count: number;
}

export interface ITaskRepository {
  createTask(task: ITask): Promise<ITask>;
  getAllTasks(): Promise<ITask[]>;
  getSingleTask(id: string): Promise<ITask | null>;
  updateTask(id: string, task: ITask): Promise<ITask | null>;
  deleteTask(id: string): Promise<ITask | null>;
  getFilteredTasks(filterObject: Record<string, any>): Promise<ITask[]>;
  getSortedDataForDueDate(sortOrder: "asc" | "dsc"): Promise<ITask[]>;
  getTaskCountPerCategory(): Promise<IGroupTaskCategory[] | null>;
}
