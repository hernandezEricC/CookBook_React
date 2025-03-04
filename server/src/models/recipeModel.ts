import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createRecipe = async (title: string, ingredients: string, instructions: string) => {
  return await prisma.recipe.create({
    data: { title, ingredients, instructions },
  });
};

export const getRecipes = async () => {
  return await prisma.recipe.findMany();
};
