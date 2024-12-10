import mongoose from "mongoose";

const createUserModel = new mongoose.Schema({
    uId:{
        type: String,
        required: true,
    },
    adminEmail:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    isActive:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    positionTitle:{
        type: String,
        required: true,
    },
    userRole:{
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
    },
    username:{
        type: String,
        required: true,
    }

}, {timestamps: true})

const CreateUser = mongoose.model("CreateUser", createUserModel);
export default CreateUser;
