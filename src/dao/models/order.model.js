import mongoose from "mongoose";

const collection = "order";

const orderSchema = new mongoose.Schema ({
    number: Number,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    products: [],
    totalPrice: Number,
    status: String
})

const orderModel = mongoose.model(collection, orderSchema);

export default orderModel;