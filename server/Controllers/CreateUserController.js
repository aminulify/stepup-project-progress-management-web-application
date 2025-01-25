import CreateUser from "../models/CreateUserModel.js";

export const GetCreateUser = async(req,res) =>{
    try{
        const newUsers = await CreateUser.find();
        res.status(200).json(newUsers);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const PostCreateUser = async(req,res)=>{
    const {uId, adminEmail, email, isActive, password, positionTitle, userRole, username, imageURL} = req.body;
    // console.log(uId, adminEmail, email, isActive, password, positionTitle, userRole, username, imageURL);
    try{
        const users = new CreateUser({uId, adminEmail, email, isActive, password, positionTitle, userRole, username, imageURL: imageURL});
        await users.save();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: "User data not found!", error: err.message})
    }
}