/**
 * @file recipeModel.ts
 * @description
 * This file contains the model functions for interacting with the database related to recipes.
 */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * @description
 * Creates a new recipe in the database.
 * @param title - The title of the recipe.
 * @param ingredients - The ingredients of the recipe.
 * @param instructions - The instructions of the recipe.
 * @returns The created recipe.
 */
export const createRecipe = async (title: string, ingredients: string, instructions: string) => {
  return await prisma.recipe.create({
    data: { title, ingredients, instructions },
  });
};

/**
 * @description
 * Gets all recipes from the database.
 * @returns An array of recipes.
 */
export const getRecipes = async () => {
  return await prisma.recipe.findMany();
};
