import express, { Router } from "express";

export class ProductRoutes {
  private readonly router: Router;

  constructor() {
    this.router = express.Router();
  }
}
