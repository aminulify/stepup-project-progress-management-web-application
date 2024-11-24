import UserData from "../models/userDataSchemaModel.js"

export const getUserData = async(req,res) =>{
    try{
        const users = await UserData.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const createUserData = async(req,res) =>{
    const {uId, username, email, password, role, rolePosition, isActive, adminEmail, imageURL} = req.body;
    console.log(uId, username, email, password, role, rolePosition, isActive, adminEmail, imageURL);
    try{
        const users = new UserData({uId, username, email, password, role, rolePosition, isActive, adminEmail, imageURL});
        await users.save();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: "User data is not found!", error: err.message})
    }
}