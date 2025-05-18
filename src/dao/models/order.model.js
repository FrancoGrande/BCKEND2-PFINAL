import mongoose from "mongoose";

const collection = "orders";

const orderSchema = new mongoose.Schema ({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                required: true
                },
                quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    total:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const orderModel = mongoose.model(collection, orderSchema);

export default orderModel;