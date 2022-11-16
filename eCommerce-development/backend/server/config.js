import dotenv from 'dotenv';

dotenv.config({path: '../.env'})

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://cajirecuerdos:JZGYSUiQO4hmMOjp@cluster0.iaow5jw.mongodb.net/cajirecuerdos"

export const PORT = process.env.PORT || 4000
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME || "cajirecuerdos"
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || 285974646442127
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "B7uvfyNVkOo6rGgQdX6dh26zNM4"