import BusinessRepository from "../repositories/business.repository.js";

const businessService = new BusinessRepository();


export const getBusinessById =  async(req, res) => {
    const {bid} = req.params;
    let result = businessService.getBusinessById(bid);
    res.send({status: "success", result});
}

export const getBusiness = async(req, res) => {
    let result = await businessService.getBusiness();
    res.send({status: "success", result});
}

export const createBusiness = async(req, res) => {
    const user = req.body;
    res.send({status: "success", result});
}

export const addproduct = async(req, res) => {
    res.send({status: "success", result});
}


export const updateBusiness = async(req, res) => {
    res.send({status: "success", result});
}

export const deleteBusiness = async(req, res) => {
    res.send({status: "success", result});
}