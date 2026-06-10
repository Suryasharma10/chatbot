import mongoose from "mongoose";

const botschema =new mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})
const Bot =mongoose.model("bot",botschema)
export default Bot;