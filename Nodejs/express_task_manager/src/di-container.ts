import "reflect-metadata";
import { container } from "tsyringe";
import { ITaskRepository } from "./repositories/ITaskRepository";
import { TaskRepository } from "./repositories/TaskRepository";
import { ITaskService } from "./services/ITaskService";
import { TaskService } from "./services/TaskService";
import { TaskController } from "./controllers/TaskController";
import { TaskRouter } from "./routes/TaskRoute";

container.register<ITaskRepository>("ITaskRepository", {
  useClass: TaskRepository,
});
container.register<ITaskService>("ITaskService", { useClass: TaskService });
container.register<TaskController>("TaskController", {
  useClass: TaskController,
});
container.register<TaskRouter>("TaskRouter", { useClass: TaskRouter });
