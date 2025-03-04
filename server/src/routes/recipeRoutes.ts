/**
 * @file recipeRoutes.ts
 * @description
 * This file contains the route definitions for the recipe API.
 */
import express from "express";
import { getAllRecipes, addRecipe } from "../controllers/recipeController";

// Create a new router instance
const router = express.Router();

// Define the routes for the recipe API
// GET /api/recipes - Get all recipes
// POST /api/recipes - Create a new recipe
router.get("/", getAllRecipes);
router.post("/", addRecipe);

export default router;
