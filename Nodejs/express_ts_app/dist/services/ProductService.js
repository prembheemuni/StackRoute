"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            let newProduct = yield this.productRepository.addProduct(product);
            if (!newProduct) {
                throw new Error(`Error at adding product`);
            }
            return newProduct;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.productRepository.deleteProduct(id);
            if (!result) {
                throw new Error(`Error occured while deleting ${id}`);
            }
            return result;
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.getAllProducts();
        });
    }
    updateProduct(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.productRepository.updateProduct(id, product);
            if (!result) {
                throw new Error(`Error Occurred with ${id}`);
            }
            return result;
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let product = yield this.productRepository.getSingleProduct(id);
            if (!product) {
                throw new Error(`Error at fetching the product ${id}`);
            }
            return product;
        });
    }
}
exports.ProductService = ProductService;
