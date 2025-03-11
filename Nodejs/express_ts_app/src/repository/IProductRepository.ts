import { IProduct } from "../models/product";

export interface IProductRepository {
  getAllProducts(): Promise<IProduct[]>;
  addProduct(product: IProduct): Promise<IProduct>;
  deleteProduct(id: string): Promise<IProduct | null>;
  updateProduct(id: string, product: IProduct): Promise<IProduct | null>;
  getSingleProduct(id: string): Promise<IProduct | null>;
}
