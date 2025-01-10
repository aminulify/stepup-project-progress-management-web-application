import mongoose from "mongoose";

// team member schema 
const TeamMemberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
    }
});

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
        default: "high",
    },
    notes: {
        type: [String],
    },
    stage: {
        type: String,
        required: true,
        default: 'todo'
    },
    teamMember: {
        type: [TeamMemberSchema],
        required: true,
    },
    tags: {
        type: String,
        required: true
    },
    subTasks: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    }
})

export const Tasks = mongoose.model("Tasks", TaskSchema);