import orderService from '../dao/order.dao.js'


export const getOrders = async (req, res) => {
    let result = await orderService.getOrders();
    res.send({status: "success", result});
}

export const getOrderById = async(req, res) => {
    
}

export const saveOrder = async(req, res) => {
    
}

export const resolveOrder = async(req, res) => {
    
}

export const deleteOrder = async(req, res) => {
    
}