import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
