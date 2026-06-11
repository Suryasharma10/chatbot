import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatbotroute from './routes/chatbot.route.js';
import cors from 'cors';
const app =express();
dotenv.config();
const port=process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello World");
})
//database connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})

//definig route
app.use("/bot/v1/message",chatbotroute)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);  
})