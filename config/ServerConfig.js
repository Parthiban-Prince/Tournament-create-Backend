import dotenv from 'dotenv';
dotenv.config();
export const SERVER_PORT = process.env.SERVER_PORT || 5000;
export const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/mydatabase';
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'Nothing';





export default {  
    SERVER_PORT,
    DB_URL,
    JWT_SECRET_KEY
 }