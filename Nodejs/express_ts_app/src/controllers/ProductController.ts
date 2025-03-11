import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  private readonly productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productService.getAllProducts();
      res.status(200).json({ message: "success", data: products });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async addProduct(req: Request, res: Response) {
    try {
      const newProduct = await this.productService.addProduct(req.body);
      res.status(201).json({ success: true, data: newProduct });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const updatedProduct = await this.productService.updateProduct(
        req.params.id,
        req.body
      );
      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const deletedProduct = await this.productService.deleteProduct(
        req.params.id
      );
      res.status(200).json({ success: true, data: deletedProduct });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getSingleProduct(req: Request, res: Response) {
    try {
      const singleProduct = await this.productService.getProductById(
        req.params.id
      );
      res.status(200).json({ success: true, data: singleProduct });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
