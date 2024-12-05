import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    adminEmail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    startingDate: {
        type: String,
        required: true,
    },
    endingDate: {
        type: String,
        required: true,
    },
    taskPrioirty: {
        type: String,
        required: true,
        default: "Normal",
    },
    note: {
        type: String,
    },
    stage: {
        type: String,
        required: true,
        default: 'todo'
    },
    teamMember: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true
    }
})

export const Tasks = mongoose.model("Tasks", TaskSchema);