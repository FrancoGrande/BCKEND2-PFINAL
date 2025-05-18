import orderDTO from "../dao/dto/order.dto.js";
import orderDao from "../dao/order.dao.js";

export default class orderRepository {
    constructor () {
        this.dao =new orderDao();
    }

    createOrder = async (order) => {
        const orderToSave = new orderDTO(order);
        return await this.dao.createOrder(orderToSave);
    }

    getAllOrders = async () =>{
        return await this.dao.getAllOrders();
    }
}