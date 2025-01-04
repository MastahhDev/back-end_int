import RecipeModel from "../../models/recipeModel.js";

export const updateRecipe = async (req, res) => {
    const {id} = req.params;
    const updatedRecipe = await RecipeModel.findOneAndUpdate(id);
    res.status(200).json(updatedRecipe);
}