import mongoose, { Schema } from "mongoose";
import RecipeModel from "./recipeModel.js";

const AuthorSchema = new Schema({
    name: { type: String, minlength: 2, maxlength: 30, required: true },
    email: { type: String, unique: true, required: true },
    birthDate: { type: Date, required: true },
    blogsCount: { type: Number, default: 0 },
    createdDate: { type: Date, default: () => new Date.now() },
});

AuthorSchema.post("findOneAndDelete", async function (doc) {
    await RecipeModel.deleteMany({ author: doc._id });
});

const AuthorModel = mongoose.model("AuthorModel", AuthorSchema);

export default AuthorModel;