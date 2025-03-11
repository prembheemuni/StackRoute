import { Request, response, Response } from "express";
import { ITaskService } from "../services/ITaskService";
import "reflect-metadata";
import { inject, injectable } from "tsyringe";

@injectable()
export class TaskController {
  constructor(
    @inject("ITaskService") private readonly taskService: ITaskService
  ) {}

  async createTask(req: Request, res: Response) {
    try {
      const newTask = await this.taskService.createTask(req.body);
      res.status(201).json({ success: true, data: newTask });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async getAllTasks(
    req: Request<{}, {}, {}, { status: string; category: string }>,
    res: Response
  ) {
    try {
      if (Object.keys(req.query).length > 0) {
        const tasksByStatus = await this.taskService.getFilteredTasks(
          req.query
        );
        res.status(200).json({ success: true, data: tasksByStatus });
      } else {
        const allTasks = await this.taskService.getAllTasks();
        res.status(200).json({ success: true, data: allTasks });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async getSingleTask(req: Request, res: Response) {
    try {
      const singleTask = await this.taskService.getSingleTask(req.params.id);
      res.status(200).json({ success: true, data: singleTask });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async updateTask(req: Request, res: Response) {
    try {
      const updatedTask = await this.taskService.updateTask(
        req.params.id,
        req.body
      );
      res.status(200).json({ success: true, data: updatedTask });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async deleteTask(req: Request, res: Response) {
    try {
      const deletedTask = await this.taskService.deleteTask(req.params.id);
      res.status(200).json({ success: true, data: deletedTask });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async getSortedDataForDueDate(
    req: Request<{}, {}, {}, { sorted: "asc" | "dsc" }>,
    res: Response
  ) {
    try {
      const { sorted } = req.query;
      if (!sorted)
        res.status(400).json({ message: "Please provide sorted param" });
      const sortedTasks = await this.taskService.getSortedDataForDueDate(
        sorted
      );
      res.status(200).json({ success: true, data: sortedTasks });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async getTaskCountPerCategory(req: Request, res: Response) {
    try {
      const response = await this.taskService.getTaskCountPerCategory();
      res.status(200).json({ success: true, data: response });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}
