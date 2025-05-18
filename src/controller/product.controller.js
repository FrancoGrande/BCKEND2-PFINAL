import ProductRepository from "../repositories/product.repository.js";

const productService = new ProductRepository();


export const getProductById =  async(req, res) => {
    const {pid} = req.params;
    let result = productService.getProductById(pid);
    res.send({status: "success", result});
}

export const getProduct = async(req, res) => {
    let result = await productService.getProduct();
    res.send({status: "success", result});
}

export const createProduct = async(req, res) => {
    const user = req.body;
    res.send({status: "success", result});
}

export const addproduct = async(req, res) => {
    res.send({status: "success", result});
}


export const updateProduct = async(req, res) => {
    res.send({status: "success", result});
}

export const deleteProduct = async(req, res) => {
    res.send({status: "success", result});
}