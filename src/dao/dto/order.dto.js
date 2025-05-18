export default class OrderDTO{
    constructor({user,products,total}){
            this.user = user;
            this.products = products;
            this.total = total;
            this.createdAt = new Date();
    }
}