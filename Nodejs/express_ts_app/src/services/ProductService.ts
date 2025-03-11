import { IProduct } from "../models/product";
import { ProductRepository } from "../repository/ProductRepository";
import { IProductService } from "./IProductService";

export class ProductService implements IProductService {
  private readonly productRepository: ProductRepository;
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }
  async addProduct(product: IProduct): Promise<IProduct | null> {
    let newProduct = await this.productRepository.addProduct(product);
    if (!newProduct) {
      throw new Error(`Error at adding product`);
    }
    return newProduct;
  }
  async deleteProduct(id: string): Promise<IProduct | null> {
    let result = await this.productRepository.deleteProduct(id);
    if (!result) {
      throw new Error(`Error occured while deleting ${id}`);
    }
    return result;
  }
  async getAllProducts(): Promise<IProduct[]> {
    return await this.productRepository.getAllProducts();
  }
  async updateProduct(id: string, product: IProduct): Promise<IProduct | null> {
    let result = await this.productRepository.updateProduct(id, product);
    if (!result) {
      throw new Error(`Error Occurred with ${id}`);
    }
    return result;
  }
  async getProductById(id: string): Promise<IProduct | null> {
    let product = await this.productRepository.getSingleProduct(id);
    if (!product) {
      throw new Error(`Error at fetching the product ${id}`);
    }
    return product;
  }
}
