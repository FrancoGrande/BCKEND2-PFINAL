import orderModel from '../dao/models/order.model.js';

export default class Order{

    getOrders = async () => {
        try{
            let allOrder = await orderModel.find();
            return allOrder;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    getOrderById = async (id) => {
        try{
            let order = await orderModel.findOne({_id: id});
            return order;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    saveOrder = async (order) => {
        try{
            let orderCreated = await orderModel.create(order);
            return orderCreated;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    resolveOrder = async (id, order) => {
        try{
            let orderUpdated = await orderModel.updeateOne({_id : id}, {$set: order});
            return orderUpdated;
        }
        catch(error){
            console.log(error);
            return null
        }
    }
}