import express from "express";
import mongoose from "mongoose";
import { ServerConfig } from "./config";
import { TaskRouter } from "./routes/TaskRoute";
import "./di-container";
import "reflect-metadata";
import { container } from "tsyringe";

const app = express();

mongoose.connect(ServerConfig.MONGO_URI);
mongoose.connection
  .once("open", () => {
    console.log("Connected to DB");
  })
  .on("error", (err) => {
    console.log(err);
  });

app.use(express.json());

// const taskRouter = new TaskRouter();
const taskRouter = container.resolve(TaskRouter);

app.use("/api/task", taskRouter.getRouter());

export default app;
