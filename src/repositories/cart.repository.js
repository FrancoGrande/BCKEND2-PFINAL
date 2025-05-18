import cartDTO from "../dao/dto/cart.dto.js";
import cartDao from "../dao/cart.dao.js";

export default class cartRepository {

    constructor() { 
        this.dao = new cartDao();
    }

    createCart = async (cart) => {
        const cartToSave = new cartDTO(cart);
        return await this.dao.createCart(cartToSave);
    }

    getCartById = async (id) => {
        return await this.dao.getCartById(id);
    }

    deleteCart = async (id) => {
        return await this.dao.deleteCart(id);
    }

    addProductToCart    = async (cid, pid) => {
        return await this.dao.addProductToCart(cartId, productId, 1);
    }

    deleteProductFromCart = async (cid, pid) => {
        return await cartDao.deleteProductFromCart(cartId, productId);
    }

}