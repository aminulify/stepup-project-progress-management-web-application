import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    uId: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rolePosition: {
        type: String,
        // required: true,
        default: "Administrator"
    },
    imageURL: {
        type: String,
    },
    role: {
        type: String,
        default: "Admin"
    },
    adminEmail: {
        type: String,
        default: "N/A"
    },
    isActive: {
        type: String,
        default: "Active"
    }
}, {timestamps: true})

const UserData = mongoose.model("UserData", userDataSchema);
export default UserData;