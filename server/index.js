import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import "dotenv/config";
import contactSupportRoute from './Routes/ContactSupportRoute.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

try{
    mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`\nMongoDB Connected !`);
} catch(error){
    console.log("MONGODB CONNECTION FAILED:",error);
}

app.get('/',(req,res)=>{
    res.send("Server is running")
})

// routes 
app.use('/api/contact', contactSupportRoute);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

