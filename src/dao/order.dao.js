import orderModel from '../dao/models/order.model.js';

export default class Order{

    createOrder = async (order) => {
        try {
            let createdOrder = await orderModel.create(order);
            return createdOrder

        } catch (error) {
            console.log(error);
            return null
        }
    }

    getAllOrders =async () => {
        try {
            let allOrders = await orderModel.find();
            return allOrders
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

