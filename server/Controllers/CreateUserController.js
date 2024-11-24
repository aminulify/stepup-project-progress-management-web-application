import CreateUser from "../models/CreateUserModel";

export const GetCreateUser = async(req,res) =>{
    try{
        const newUsers = await CreateUser.find();
        res.status(200).json(newUsers);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const PostCreateUser = async(req,res)=>{
    const {uId, adminEmail, email, isActive, password, positionTitle, userRole, username} = req.body;
    // console.log(adminEmail, email, isActive, password, positionTitle, userRole, username);

    try{
        const users = new CreateUser({uId, adminEmail, email, isActive, password, positionTitle, userRole, username});
        await users.save();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: "User data not found!", error: err.message})
    }
}