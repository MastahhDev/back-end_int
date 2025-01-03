import UserModel from "../../models/userModel";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

const roles = ["admin", "user"];

export const registerController = async (req, res) => {

    const { email, password, role } = req.body;
  
    try {
      const userExists = await UserModel.findOne({ email });
      if (userExists) { //Checks to avoid email repetition
        return res.status(400).json({ message: "User already exists." });
    }
    
    if (!roles.includes(role)) { //Checks for role
        return res.status(400).json({ message: "Role doesn't exist." });
    }
    
    const user = await UserModel.create({ email, password, role });
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
  
      res.cookie("refreshToken", refreshToken, { // Cross-Site Request Forgery protection
        httpOnly: true,
        sameSite: "strict"
      });
  
      res.status(200).json({ accessToken });

    } catch (error) { //C.log of error
      console.log({ error });
      res.status(500).json({ message: "Server error." });
    }
};