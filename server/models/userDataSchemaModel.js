import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    uId: {
        type: String,
        required: true,
        default: "N/A"
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Admin"
    }
}, {timestamps: true})

const UserData = mongoose.model("UserData", userDataSchema);
export default UserData;