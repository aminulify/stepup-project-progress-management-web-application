import UserData from "../models/userDataSchemaModel.js"

export const getUpdatedData = async(req,res) =>{
    const userId = req.params.id;
    try{
        const user = await UserData.findById(userId);

        if(!user){
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json(user);

    }
    catch(err){
        res.status(500).json('Something went wrong');
    }
}

export const updateUserData = async(req,res) =>{
    const userId = req.params.id;
    console.log(userId);
    const {username, role, rolePosition, isActive} = req.body;
    // console.log(username, role, rolePosition, isActive);

    try{
        const user = await UserData.findByIdAndUpdate(
            userId,
            {username: username, role: role, rolePosition: rolePosition, isActive: isActive},
        );

        if(!user){
            return res.status(200).json({message:'User not found'});
        }
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json('Something went wrong');
    }
}