/**
 * @file server.ts
 * @description
 * This file contains the main entry point for the server application.
 */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipeRoutes";

// Load environment variables from .env file
dotenv.config();

// Create a new instance of the express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Parse incoming URL-encoded requests
app.use("/api/recipes", recipeRoutes);

// Define a simple route for the root URL
const PORT = process.env.PORT || 5001;

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
