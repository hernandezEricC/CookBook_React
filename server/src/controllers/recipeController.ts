/**
 * @file recipeController.ts
 * @description
 * This file contains the controller functions for handling HTTP requests related to recipes.
 */

import { Request, Response } from "express";
import { createRecipe, getRecipes } from "../models/recipeModel";

/**
 * @description
 * Handles the HTTP GET request to fetch all recipes.
 * It interacts with the recipe model to get the recipes.
 * It sends the recipes as a JSON response.
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 */
export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes" });
  }
};

/**
 * @description
 * Handles the HTTP POST request to create a new recipe.
 * It interacts with the recipe model to create the recipe.
 * It sends the created recipe as a JSON response.
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 */
export const addRecipe = async (req: Request, res: Response) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const recipe = await createRecipe(title, ingredients, instructions);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Error creating recipe" });
  }
};
