import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
    },
    phone:{
        type: Number,
        required: true
    },
    companyName:{
        type: String,
        required: true,
        default: 'N/A'
    },
    description:{
        type: String,
        required: true
    },
    numberOfEmployee:{
        type: String,
        required: true,
        default: 0
    },
    
}, {timestamps: true})

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;