import express, { Router } from "express";
import { TaskController } from "../controllers/TaskController";
import "reflect-metadata";
import { inject, injectable } from "tsyringe";

@injectable()
export class TaskRouter {
  private router: Router;
  //   private readonly taskController: TaskController;
  constructor(
    @inject("TaskController") private readonly taskController: TaskController
  ) {
    this.router = express.Router();
    // this.taskController = new TaskController(
    //   new TaskService(new TaskRepository())
    // );
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(
      "/",
      this.taskController.getAllTasks.bind(this.taskController)
    );
    this.router.post(
      "/",
      this.taskController.createTask.bind(this.taskController)
    );
    this.router.get(
      "/duedate",
      this.taskController.getSortedDataForDueDate.bind(this.taskController)
    );
    this.router.get(
      "/count/category",
      this.taskController.getTaskCountPerCategory.bind(this.taskController)
    );
    this.router.put(
      "/:id",
      this.taskController.updateTask.bind(this.taskController)
    );
    this.router.get(
      "/:id",
      this.taskController.getSingleTask.bind(this.taskController)
    );
    this.router.delete(
      "/:id",
      this.taskController.deleteTask.bind(this.taskController)
    );
  }

  getRouter() {
    return this.router;
  }
}
