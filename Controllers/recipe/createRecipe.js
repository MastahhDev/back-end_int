import RecipeModel from "../../models/recipeModel";

export const createRecipe = async (req, res) => {
    try {
      const { author, createdDate, stepByStep, description, title } = req.body;
  
      const image = req?.files?.image;
  
      const newRecipe = new RecipeModel({
        author,
        createdDate,
        stepByStep,
        description,
        image: image?.data,
        title,
        imageType: image?.mimetype,
      });
  
      await newRecipe.save();
      res.status(201).json(newRecipe);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error." });
    }
};