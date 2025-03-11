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
exports.ProductController = void 0;
class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productService.getAllProducts();
                res.status(200).json({ message: "success", data: products });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield this.productService.addProduct(req.body);
                res.status(201).json({ success: true, data: newProduct });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedProduct = yield this.productService.updateProduct(req.params.id, req.body);
                res.status(200).json({ success: true, data: updatedProduct });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedProduct = yield this.productService.deleteProduct(req.params.id);
                res.status(200).json({ success: true, data: deletedProduct });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    getSingleProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const singleProduct = yield this.productService.getProductById(req.params.id);
                res.status(200).json({ success: true, data: singleProduct });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.ProductController = ProductController;
