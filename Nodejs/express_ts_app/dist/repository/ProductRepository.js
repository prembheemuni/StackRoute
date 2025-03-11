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
exports.ProductRepository = void 0;
const product_1 = require("../models/product");
class ProductRepository {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_1.Product.find();
        });
    }
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, quantity, rating } = product;
            const newProduct = new product_1.Product({
                name,
                description,
                price,
                quantity,
                rating,
            });
            return yield newProduct.save();
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_1.Product.findByIdAndDelete(id);
        });
    }
    updateProduct(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, quantity, rating } = product;
            return yield product_1.Product.findByIdAndUpdate(id, {
                name,
                description,
                price,
                quantity,
                rating,
            });
        });
    }
    getSingleProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_1.Product.findById(id);
        });
    }
}
exports.ProductRepository = ProductRepository;
