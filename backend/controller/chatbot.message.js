import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
    try{
        const {text} =req.body;
        if(!text?.trim()){
            return res.status(400).json({error:"Text Cannot be empty"});
        }
        const user =await User.create({
            sender :"user",
            text
        })
        //data
        const botdata ={
            "hello": "hi there",
            "hi": "hello",
            "hey": "hey, how can i help you",
            "good morning": "good morning to you",
            "good afternoon": "good afternoon",
            "good evening": "good evening",
            "how are you": "i am fine, thank you",
            "what is your name": "i am a chatbot",
            "who are you": "i am your virtual assistant",
            "nice to meet you": "nice to meet you too",
            "bye": "goodbye",
            "see you later": "see you later",
            "thank you": "you are welcome",
            "thanks": "happy to help",
            "how old are you": "i do not have an age",
            "where are you from": "i exist in the digital world",
            "what can you do": "i can answer questions and chat",
            "tell me a joke": "why did the computer get cold because it forgot to close windows",
            "i am sad": "i hope things get better soon",
            "i am happy": "that is wonderful to hear",
            "what is ai": "ai stands for artificial intelligence",
            "what is programming": "programming is writing instructions for computers",
            "what is c++": "c++ is a programming language",
            "what is python": "python is a popular programming language",
            "what is javascript": "javascript is used for web development",
            "what is html": "html is used to structure web pages",
            "what is css": "css is used to style web pages",
            "what is react": "react is a javascript library for building user interfaces",
            "what is nodejs": "nodejs allows javascript to run on servers",
            "what is a database": "a database stores information",
            "what is sql": "sql is used to manage databases",
            "what is machine learning": "machine learning is a branch of ai",
            "what is an algorithm": "an algorithm is a step by step solution to a problem",
            "what is a variable": "a variable stores data",
            "what is a function": "a function performs a specific task",
            "what is an array": "an array stores multiple values",
            "what is a loop": "a loop repeats a block of code",
            "what is recursion": "recursion is when a function calls itself",
            "what is github": "github is a platform for code hosting",
            "what is git": "git is a version control system",
            "can you help me": "yes, i will try my best",
            "i love coding": "coding is a great skill",
            "what day is today": "please check your device calendar",
            "what time is it": "please check your device clock",
            "are you real": "i am a virtual assistant",
            "do you sleep": "no, i do not sleep",
            "do you eat": "no, i do not eat",
            "can you learn": "i can improve through training",
            "what is your purpose": "my purpose is to assist users",
            "good night": "good night and take care"
        }
        const normalizetext=text.toLowerCase().trim();
        const output =botdata[normalizetext]|| "Sorry I Have limited answer 😔";
        const bot=await Bot.create({
            text :output
        })
        return res.status(200).json({
            userMessage:user.text,
            botMessage:bot.text,
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({error:"Internal Error"});
    }
}