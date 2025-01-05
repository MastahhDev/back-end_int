import { Router } from "express";
import { createRecipe } from "../controllers/recipe/createRecipe.js";
import { deleteRecipe } from "../controllers/recipe/deleteRecipe.js";
import { getAllRecipes } from "../controllers/recipe/getAllRecipes.js";
import { getRecipeById } from "../controllers/recipe/getRecipeById.js";
import { updateRecipe } from "../controllers/recipe/updateRecipe.js";
// import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from "../controllers/recipe/recipeIndex.js";
import { authorize } from "../middlewares/auth/authorize.js";
import { protect } from "../middlewares/auth/protect.js";
//import compressionMiddleware
import { createRecipeValidator } from "../validators/createRecipeValidator.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import { getAllRecipes } from "../controllers/recipe/getAllRecipes.js";

const router = Router();

router.get("/"/*, compressionMiddleware*/, getAllRecipes);
router.get("/:id", protect, getRecipeById);
router.post("/", protect, authorize("admin"), createRecipeValidator, validationMiddleware, createRecipe);
router.put("/:id", protect, authorize("admin"), updateRecipe);
router.delete("/:id", protect, authorize("admin"), deleteRecipe);

export default router;