import express from "express";
import {
  createRecipe,
  getRecipes,
  getMyRecipes,
} from "../controllers/recipeController";
import auth from "../middleware/auth";

const router = express.Router();

router.post("/recipes", auth, createRecipe);
router.get("/recipes", getRecipes);
router.get("/my-recipes", auth, getMyRecipes);

export default router;
