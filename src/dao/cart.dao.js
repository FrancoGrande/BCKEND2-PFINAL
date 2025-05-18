import cartModel from "../dao/models/cart.model.js";
import ProductModel from "./models/product.model.js";



export default class Cart{

    getCartById=async (id) =>{
        try{
            return await cartModel.findById(id).populate("products.product")
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    createCart=async (cart) =>{
        try {
            let newCart = await cartModel.create({product : []});
            return newCart;
        } catch (error) {
            console.log(error);
            return null
        }
    }

    deleteCart=async (id) =>{
        try {
            let cartDeleted = await cartModel.deleteOne({_id: id});
            return cartDeleted
        } catch (error) {
            console.log(error);
            return null
        }
    }

     //aca tengo dudas    

    addProductToCart=async (cartId,productId, quantity=1) =>{
        try {
            let cart = cartModel.findById(cartId);
            let product = ProductModel.findById

            if(!product){
                throw new Error("Product not found");
            }

            if (product.stock < quantity || product.stock === 0) {
                throw new Error("Not enough stock");
            }
            
            if(!cart){
                return null
            }

            const productIndex = cart.products.findIndex( product => product.product.toString() === productId);

            if (productIndex !== -1) {
                cart.products[productIndex].quantity += quantity;
            } else { 
                cart.products.push({ product: productId, quantity });
            }

            const updatedCart = await cart.save();
            return updatedCart

        } catch (error) {
            console.log(error);
            return null
        }
    }

    deleteProductFromCart=async (cartId,productId) =>{
        try {
            const cartUpdated = await cartModel.updateOne(
                { _id: cartId },
                { $pull: { products: { product: productId } } }
            );         
            return cartUpdated
        } catch (error) {
            console.log(error);
            return null
        }
    }

}