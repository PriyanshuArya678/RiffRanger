import mongoose from "mongoose";

const DetailsSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const DetailsModel = mongoose.model("Detail", DetailsSchema);

export default DetailsModel;
