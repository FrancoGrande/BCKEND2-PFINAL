import orderRepository from "../repositories/order.repository.js";
import cartModel from "../dao/models/cart.model.js";
import productModel from "../dao/models/product.model.js";

const orderService = new orderRepository();

export const createOrder = async (req, res) => {
    const {userId, cartId} = req.body;

    try {
        const cart = await cartModel.findById(cartId).populate("products.product");
        if(!cart) {
            return res.status(404).send({status: "error", error: "Carrito no encontrado"});
        }

        let total = 0;

        for (const item of cart.products) {
            const product = await productModel.findById(item.product._id);
            if (!product) {
                return res.status(400).send({status: "error", error: "Producto no disponible"});
            }
            if (item.quantity > product.stock) {
                return res.status(400).send({status: "error", error: "Stock insuficiente"});
            }
            product.stock -= item.quantity;
            total += product.price * item.quantity;
            await product.save();
        }
        
    } catch (error) {
        res.status(500).send({status: "error", error: error.message});
    }
}


export const getOrders = async (req, res) => {
    const result = await orderService.getOrders();
    res.send({ status: "success", result });
};