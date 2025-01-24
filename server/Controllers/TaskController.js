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

export const UpdateTask = async(req,res) =>{
    const taskId = req.params.id;
    console.log(taskId);
    const {title, adminEmail, startingDate, endingDate, taskPrioirty, notes, stage, teamMember, tags, description, subTasks} = req.body;
    
    try{
        const data = await Tasks.findByIdAndUpdate(taskId, {title: title, adminEmail: adminEmail, startingDate: startingDate, endingDate: endingDate, taskPrioirty: taskPrioirty, notes: notes, stage: stage, teamMember: teamMember, tags: tags, description: description, subTasks: subTasks});

        if(!data){
            return res.status(404).json({message: 'No data found'})
        }

        res.status(200).json({message: 'successful', data});
    }
    catch(err){
        res.status(500).json({message: 'Something went wrong!'})
    }
}

export const UpdateStageTaskData = async(req,res) =>{
    const taskId = req.params.id;
    const {stage} = req.body;

    try{
        const data = await Tasks.findByIdAndUpdate(taskId, {stage: stage});

        if(!data){
            return res.status(404).json({message: 'No data found'})
        }
        res.status(200).json({message: 'successful', data})
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

export const PostTaskData = async(req,res) =>{
    const {adminEmail, title, startingDate, endingDate, taskPrioirty, notes, stage, teamMember, tags, description, subTasks } = req.body;
    
    console.log(adminEmail, title, startingDate, endingDate, taskPrioirty, notes, stage, teamMember, tags, description, subTasks);

    try{
        const createTask = new Tasks({adminEmail, title, startingDate, endingDate, taskPrioirty, notes, stage, teamMember, tags, description, subTasks});
        await createTask.save();

        console.log(createTask);
        res.status(200).json(createTask);
    }catch(err){
        res.status(500).json({message: "User not found", err:err.message}); 
    }
}   