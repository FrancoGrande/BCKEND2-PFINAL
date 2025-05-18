import BusinessDTO from "../dao/dto/business.dto.js";
import BusinessDao from "../dao/business.dao.js";

export default class BusinessRepository {
    constructor() {
        this.dao = new BusinessDao();
    }

    getBusiness = async () => {
        let result = await this.dao.getBusiness();
        return result;
    }

    getBusinessById = async (id) => {
        let result = await this.dao.getBusinessById(id);
        return result;
    }

    createBusiness = async (business) => {
        let businessToInsert = new BusinessDTO(business);
        let result = await this.dao.createBusiness(businessToInsert);
        return result;
    }

    addProduct = async (business) => {
        let businessToInsert = new BusinessDTO(business);
        let result = await this.dao.addproduct(businessToInsert);
        return result;
    }

    updateBusiness = async (id,business) => {
        let businessToUpdate = new BusinessDTO(business);
        let result = await this.dao.updateBusiness(businessToUpdate);
        return result;
    }
}