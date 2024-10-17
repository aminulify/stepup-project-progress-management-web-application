import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    companyName:{
        type: String,
    },
    employees:{
        type: String,
        required: true
    },
    describe:{
        type: String,
        required: true
    }
}, {timestamps: true})

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;