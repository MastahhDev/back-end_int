import UserModel from "../../models/userModel";
import { generateAccessToken } from "../../utils/auth/generateAccessToken";
import { generateRefreshToken } from "../../utils/auth/generateRefreshToken";

export const loginController = async (req, res) => {

    const { email, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ email });
      let isMatch = false;
      if (user) { //If user exists, check for password
        isMatch = await user.matchPassword(password);
      }
  
      if (isMatch) { //Generate tokens if both match
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
  
        res.cookie("refreshToken", refreshToken, { // Cross-Site Request Forgery protection
          httpOnly: true,
          sameSite: "strict"
        });
  
        res.status(200).json({ accessToken });

      } else { //If one of them don't match
        return res.status(401).json({ message: "Invalid email or password." }); 
      }
    } catch (error) { //C.log of error
      console.log(error);
      res.status(500).json({ message: "Server error." });
    }
};