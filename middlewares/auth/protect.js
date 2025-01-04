import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";
import UserModel from "../../models/userModel.js";

export const protect = async (req, res, next) => {
  let token;
  if ( req.headers.authorization && req.headers.authorization.startsWith("Bearer")){ //Checks the header
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) { //Checks for the token
    return res.status(401).json({ message: "No authorized." });
  }

  try { //Decodes the token and validates the password
    const decoded = jwt.decode(token, JWT_SECRET);
    req.user = await UserModel.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error." });
  }
};