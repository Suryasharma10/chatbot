import mongoose from "mongoose";

const userschema =new mongoose.Schema({
    sender:{
        type:String,
        require:true,
        enum:["user"]
    },
    text:{
        type:String,
        require:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})
const User =mongoose.model("user",userschema)
export default User;