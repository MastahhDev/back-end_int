import Recipe from "../models/recipe";

export const createRecipe = async (req, res) => {
  const recipe = new Recipe(req.body);
  try {
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getMyRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ author: req.user._id });
    res.send(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
};
