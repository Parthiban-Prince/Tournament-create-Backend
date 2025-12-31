import jwt from 'jsonwebtoken';
import {JWT_SECRET_KEY} from '../config/ServerConfig.js';


export const generateToken = (payload, expiresIn = '7d') => {
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn });
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET_KEY);
    } catch (error) {
        console.error("Token verification failed:", error);
        throw error;
    }
}

export const decodeToken = (token) => {
    return jwt.decode(token);
}

export default {
    generateToken,
    verifyToken,
    decodeToken
};