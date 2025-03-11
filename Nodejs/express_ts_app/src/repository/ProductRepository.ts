import { IProduct, Product } from "../models/product";
import { IProductRepository } from "./IProductRepository";

export class ProductRepository implements IProductRepository {
  async getAllProducts(): Promise<IProduct[]> {
    return await Product.find();
  }
  async addProduct(product: IProduct): Promise<IProduct> {
    const { name, description, price, quantity, rating } = product;
    const newProduct = new Product({
      name,
      description,
      price,
      quantity,
      rating,
    });
    return await newProduct.save();
  }
  async deleteProduct(id: string): Promise<IProduct | null> {
    return await Product.findByIdAndDelete(id);
  }
  async updateProduct(id: string, product: IProduct): Promise<IProduct | null> {
    const { name, description, price, quantity, rating } = product;
    return await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      quantity,
      rating,
    });
  }
  async getSingleProduct(id: string): Promise<IProduct | null> {
    return await Product.findById(id);
  }
}
