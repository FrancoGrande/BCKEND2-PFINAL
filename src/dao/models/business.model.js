import mongoose from "mongoose";

const collection = "business";

const businessSchema = new mongoose.Schema ({
    name : String,
    product : []
})

const businessModel = mongoose.model(collection, businessSchema);

export default businessModel;