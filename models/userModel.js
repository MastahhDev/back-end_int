import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){ //Checks if the password has been modified
        return next();
    };
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (password) { //Validates the password
  return await bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
