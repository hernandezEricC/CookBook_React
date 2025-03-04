import express from "express";
import { getAllRecipes, addRecipe } from "../controllers/recipeController";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", addRecipe);

export default router;
