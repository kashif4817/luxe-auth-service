import jwt from 'jsonwebtoken'
import { sendResponse } from '../utils/sendResponse.js';

export const authMiddleware = (req, res, next) => {
    console.log("entered in aut.middleware")
    console.log(req.cookies);
    const accessToken = req.cookies.accessToken;
    console.log('token', accessToken)

    if (!accessToken) return sendResponse(res, 401, "No token found or Unauthorized");

    try {
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET)
        console.log('decoded', decoded);
        req.id = decoded.id;

        next();
    } catch (error) {
        console.error(error)
        sendResponse(res, 401, "Invalid token")
    }
}