import UserData from "../models/userDataSchemaModel.js";

export const getSingleUserData = async(req,res) =>{
    const userId = req.params.id;
    
    try{
        const user = await UserData.findById(userId);

        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(user);
    }
    catch(err){
        console.log("Error fetching user by id", err);
        res.status(500).json({message: "Server Error", err});
    }
}

export const updateSingleUserData = async(req,res) =>{
    const userId = req.params.id;
    const { adminEmail } = req.body;
    console.log(adminEmail);

    try{
        const updatedUser = await UserData.findByIdAndUpdate(
            userId,
            {adminEmail: adminEmail},
        )

        if(!updatedUser){
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json({
            message: 'adminEmail updated successfully',
            user: updatedUser,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error', err });
    }
}

// export const updateSingleFullUserDetails = async(req,res) =>{
//     const userId = req.params.id;
//     const {username, rolePosition, role, isActive} = req.body;
//     console.log("data get",username, rolePosition, role, isActive);

//     try{
//         const updateSingleFullUserData = await UserData.findByIdAndUpdate(
//             userId,
//             {username: username, rolePosition: rolePosition, role: role, isActive: isActive}
//         )

//         if(!updateSingleFullUserData){
//             return res.status(404).json({message: 'User not found!'});
//         }

//         res.status(200).json({
//             message: 'Successful', 
//             user: updateSingleFullUserData
//         });
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({message:'server error', err})
//     }
// }