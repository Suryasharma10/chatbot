import express from 'express';
import { Message } from '../controller/chatbot.message.js';

const router =express.Router();
router.post("/",Message)

export default router;