import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const generateAccessToken = (user) => {
  return jwt.sign( //Asks for ID, name, email and role
    { id: user._id, name: user.name, email: user.email, role: user.role },
    JWT_SECRET,
    {
      expiresIn: "15m", //15mins of token expiration time
    }
  );
};