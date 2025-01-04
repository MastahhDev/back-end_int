import RecipeModel from "../../models/recipeModel.js";

export const getRecipeById = (req, res) => {
    const { id } = req.params;
    const recipe = RecipeModel.getRecipeById(id);
    if(!recipe){
        return res.status(404).json({message: "Recipe not found."});
    }
    res.status(200).json(recipe);
};