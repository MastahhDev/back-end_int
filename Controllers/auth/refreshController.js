import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";
import { generateAccessToken } from "../../utils/auth/generateAccessToken.js";

export const refreshController = (req, res) =>{

    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken){  //If no refresh token, send a 401
        return res.status(401).json({ message: "Refresh token required." });
    }

    jwt.verify(refreshToken, JWT_SECRET, (error, user) => {
        if(error){ //If error in token verification, send a 403
            return res.status(403).json({ message: "Refresh token required." });
        }

        const accessToken = generateAccessToken(user);

        res.status(200).json({ accessToken });

    });
};