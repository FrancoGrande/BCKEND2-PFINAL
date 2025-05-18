import orderRepository from "../repositories/order.repository.js";
import productModel from "../dao/models/product.model.js";

const orderService = new orderRepository();

export const createOrder = async (req, res) => {
    const {user, products} = req.body;

    try {
        let total = 0;

        // Verificar si el ID de usuario es válido
        if (!mongoose.Types.ObjectId.isValid(user)) { 
            return res.status(400).send({ error: "ID de usuario inválido" });
        }

        for (let item of products) {
            const prod = await productModel.findById(item.product);

            if (!prod) {
                return res.status(404).send({ error: `Producto no encontrado: ${item.product}` });
            }
        
            if (prod.stock < item.quantity) {
                return res.status(400).send({
                error: `No hay suficiente stock de "${prod.nombre}". Stock actual: ${prod.stock}, pedido: ${item.quantity}`
                });
            }

            total += prod.precio * item.quantity;
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