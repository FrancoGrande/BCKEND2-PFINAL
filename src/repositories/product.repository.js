import ProductDTO from "../dao/dto/product.dto.js";
import ProductDao from "../dao/product.dao.js";

export default class ProductRepository {
    constructor() {
        this.dao = new ProductDao();
    }

    getProduct = async () => {
        let result = await this.dao.getProduct();
        return result;
    }

    getProductById = async (id) => {
        let result = await this.dao.getProductById(id);
        return result;
    }


    createProduct = async (product) => {
        let productToInsert = new ProductDTO(product);
        let result = await this.dao.createProduct(productToInsert);
        return result;
    }

    addProduct = async (product) => {
        let productToInsert = new ProductDTO(product);
        let result = await this.dao.addproduct(productToInsert);
        return result;
    }

    updateProduct = async (id,product) => {
        let productToUpdate = new ProductDTO(product);
        let result = await this.dao.updateProduct(productToUpdate);
        return result;
    }
}