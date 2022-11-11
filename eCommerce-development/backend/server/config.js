import dotenv from 'dotenv';

dotenv.config({path: '../.env'})

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://cajirecuerdos:JZGYSUiQO4hmMOjp@cluster0.iaow5jw.mongodb.net/cajirecuerdos"

export const PORT = process.env.PORT || 3000