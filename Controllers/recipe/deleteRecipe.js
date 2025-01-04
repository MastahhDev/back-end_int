import RecipeModel from "../../models/recipeModel.js";

export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await RecipeModel.findByIdAndDelete(id);
        if (!recipe) {
            return req.status(404).json({ message: "Recipe not found." });
        }
        res.status(204).json({ message: "Recipe deleted." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}