import orderRepository from "../repositories/order.repository.js";
import productModel from "../dao/models/product.model.js";
import userModel from "../dao/models/user.model.js";

const orderService = new orderRepository();

export const createOrder = async (req, res) => {
    const {user, products} = req.body;

    try {
        let total = 0;
        //buscamos el producto por ID y sumamaos el precio 
        for (let items of products) {
            const prod = await productModel.findById(items.product);
            if (!prod) {
                return res.status(404).send({status: "error", error: "Producto no encontrado."});
            }

            total += prod.price * items.quantity;
        }

        const result= await orderService.createOrder(user,products,total);
        res.send({status: "success", result});
    } catch (error) {
        res.status(500).send({status: "error", error: error.message});
    }
}


export const getOrders = async (req, res) => {
    const result = await orderService.getAllOrders();
    res.send({ status: "success", result });
};