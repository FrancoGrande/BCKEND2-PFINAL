import businessModel from "./models/business.model";

export default class Business{

    getBusiness = async () => {
        try{
            let business = await businessModel.find();
            return business;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    getBusinessById = async (id) => {
        try{
            let business = await businessModel.findOne({_id: id});
            return business;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    addproduct = async (business) => {
        try{
            let businessCreated = await businessModel.create(business);
            return businessCreated;
        }
        catch(error){
            console.log(error);
            return null
        }
    }

    updateBusiness = async (id, business) => {
        try{
            let businessUpdated = await businessModel.updeateOne({_id : id}, {$set: business});
            return businessUpdated;
        }
        catch(error){
            console.log(error);
            return null
        }
    }
}