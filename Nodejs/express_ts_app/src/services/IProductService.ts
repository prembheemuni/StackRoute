import { IProduct } from "../models/product";

export interface IProductService {
  addProduct(product: IProduct): Promise<IProduct | null>;
  deleteProduct(id: string): Promise<IProduct | null>;
  getAllProducts(): Promise<IProduct[]>;
  updateProduct(id: string, product: IProduct): Promise<IProduct | null>;
  getProductById(id: string): Promise<IProduct | null>;
}
