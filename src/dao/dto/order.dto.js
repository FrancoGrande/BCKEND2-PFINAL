export default class OrderDTO{
    constructor(order){
            this.user = order.user;
            this.cart = order.cart;
            this.total = total.total;
            this.createdAt = order.createdAt;
    }
}