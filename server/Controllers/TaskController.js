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

export const GetEachTaskData = async(req,res) =>{
    const taskId = req.params.id;
    try{
        const data = await Tasks.findById(taskId);

        if(!data){
            return res.status(404).json({message: 'No data found!'})
        }
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({message: 'Something went wrong!'})
    }
}

export const UpdateTaskStage = async(req,res) =>{
    const taskId = req.params.id;
    const {stage} = req.body;
    console.log(stage);
    try{
        const data = await Tasks.findByIdAndUpdate(taskId, {stage: stage});

        if(!data){
            return res.status(404).json({message: 'No data found'})
        }

        res.status(200).json({message: 'successful', data});
    }
    catch(err){
        res.status(500).json({message: 'Something went wrong!'})
    }
}

export const DeleteTaskData = async(req,res) =>{
    const taskId = req.params.id;

    try{
        const data = await Tasks.findByIdAndDelete(taskId);

        if(!data){
            return res.status(404).json({message: 'No data found'})
        }
        res.status(200).json({message: 'successful', data});
    }
    catch(err){
        res.status(500).json({message: 'Something went wrong!'})
    }
}