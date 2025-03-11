import { ITask } from "../models/TaskModel";
import { ITaskRepository } from "../repositories/ITaskRepository";
import { IGroupTaskCategory, ITaskService } from "./ITaskService";
import "reflect-metadata";
import { inject, injectable } from "tsyringe";

@injectable()
export class TaskService implements ITaskService {
  constructor(
    @inject("ITaskRepository") private readonly taskRepository: ITaskRepository
  ) {}
  async createTask(task: ITask): Promise<ITask> {
    const result = await this.taskRepository.createTask(task);
    if (!result) {
      throw new Error("Error while creating Task");
    }
    return result;
  }
  async getAllTasks(): Promise<ITask[]> {
    return await this.taskRepository.getAllTasks();
  }
  async getFilteredTasks(filterObject: Record<string, any>): Promise<ITask[]> {
    return await this.taskRepository.getFilteredTasks(filterObject);
  }
  async getSingleTask(id: string): Promise<ITask | null> {
    const task = await this.taskRepository.getSingleTask(id);
    if (!task) {
      throw new Error("Error while geting the task");
    }

    return task;
  }
  async updateTask(id: string, task: ITask): Promise<ITask | null> {
    const updatedTask = await this.taskRepository.updateTask(id, task);
    if (!updatedTask) {
      throw new Error("Error while updating the task");
    }
    return updatedTask;
  }
  async deleteTask(id: string): Promise<ITask | null> {
    const deletedTask = await this.taskRepository.deleteTask(id);
    if (!deletedTask) {
      throw new Error("Error while deleting the task");
    }

    return deletedTask;
  }

  async getSortedDataForDueDate(sortOrder: "asc" | "dsc"): Promise<ITask[]> {
    return await this.taskRepository.getSortedDataForDueDate(sortOrder);
  }

  async getTaskCountPerCategory(): Promise<IGroupTaskCategory[] | null> {
    return await this.taskRepository.getTaskCountPerCategory();
  }
}
