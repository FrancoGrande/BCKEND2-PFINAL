import cartModel from "../dao/models/cart.model.js";
import ProductModel from "./models/product.model.js";



export default class Cart{

    getCartById=async (id) =>{
        try{
            let cart = await cartModel.findOne({_id: id});
            return cart;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    createCart=async (cart) =>{
        try {
            let cartCreated = await cartModel.create(cart);
            return cartCreated
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
            let product = ProductModel.findById(productId);

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