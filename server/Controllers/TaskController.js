import { Tasks } from "../models/TaskModal.js"

export const GetTaskData = async(req,res) =>{
    try{
        const data = await Tasks.find();

        if(!data){
            return res.status(404).json({message: 'No data found!'})
        }

        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({message: 'Something went wrong!'});
    }
}