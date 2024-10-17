import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import "dotenv/config";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const DB_NAME = "StepUp";

try{
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\nMongoDB Connected !`);
} catch(error){
    console.log("MONGODB CONNECTION FAILED:",error);
}

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

