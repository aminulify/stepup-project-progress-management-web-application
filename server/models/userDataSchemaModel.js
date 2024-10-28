import mongoose from "mongoose";

const userDataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    photoURL:{
        type: String,
        required: true
    }
}, {timestamps: true})

const UserData = mongoose.model("UserData", userDataSchema);
export default UserData;