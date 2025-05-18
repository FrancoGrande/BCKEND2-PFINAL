import mongoose from "mongoose";



const productCollection = "products";
const productSchema = new mongoose.Schema({
    nombre : {type: String, required: true},
    precio : {type: Number, required: true},
    stock : {type: Number, required: false},
    categoria : {type: String, required: true},
})


const ProductModel = mongoose.model(productCollection, productSchema);


export default ProductModel;