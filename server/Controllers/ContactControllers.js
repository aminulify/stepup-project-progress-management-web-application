import Contact from "../models/supportContactModel.js";

export const getContact = async(req,res) =>{
    try{
        const supports = await Contact.find();
        res.status(200).json(supports);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

export const createContact = async(req, res) => {
    const { name, email, phone, companyName, description, numberOfEmployee } = req.body;
    // console.log(name, email, phone, companyName, description, numberOfEmployee);
    try {
        const supports = new Contact({ name, email, phone, companyName, description, numberOfEmployee });
        await supports.save();  // Corrected this line to save the correct variable
        res.status(200).json(supports);
    } catch (err) {
        res.status(400).json({ message: "Contact info not defined", error: err.message });
    }
}

