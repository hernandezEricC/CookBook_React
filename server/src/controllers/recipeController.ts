import { Request, Response } from "express";
import { createRecipe, getRecipes } from "../models/recipeModel";

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recipes" });
  }
};

export const addRecipe = async (req: Request, res: Response) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const recipe = await createRecipe(title, ingredients, instructions);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Error creating recipe" });
  }
};
