import ProductRepository from "../repositories/product.repository.js";


const productService = new ProductRepository();


export const getProductById =  async(req, res) => {
    const {pid} = req.params;
    try{
        let result =  await productService.getProductById(pid);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al obtener producto", error});
    }

}

export const getProduct = async(req, res) => {
    try{
        let result = await productService.getProduct();
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error lista de productos", error});
    }
}

export const createProduct = async(req, res) => {
    const product = req.body;
    try {
        if (product.stock < 0) {
            return res.status(400).send({ error: "El stock no puede ser negativo" });
        }
        
        let result = await productService.createProduct(product);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al crear producto", error});
    }

}

export const updateProduct = async(req, res) => {
    const {pid} = req.params;
    const product = req.body;
    try {
        if (product.stock < 0) {
            return res.status(400).send({ error: "El stock no puede ser negativo" });
        }
    
        let result = await productService.updateProduct(pid, product);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al actualizar producto", error});
    }

}

export const deleteProduct = async(req, res) => {
    const {pid} = req.params;
    try{
        let result = await productService.deleteProduct(pid);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al eliminar producto", error});
    }

}