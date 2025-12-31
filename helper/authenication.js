import { verifyToken,decodeToken } from "./jwtToken.js";
import { getUserRepository } from "../repository/userRepository.js";

export async function authenticateRequest(req, res, next) {

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];


        
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        const emailverified = await  getUserRepository(decoded.email);
        if(!emailverified){
            return res.status(401).json({ message: 'Unauthorized: Invalid email' });
        }


        req.user = decoded; // Attach decoded token data to request object
        next(); // Proceed to the next middleware or route handler
    
    }
    catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }


}

export default authenticateRequest;