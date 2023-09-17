import express from "express";
import categoriesController from "../controllers/categoriesController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve a list of transaction categories
router.get("/", authMiddleware, categoriesController.getAllCategories);

// GET route to retrieve a specific category by ID
router.get("/:id", authMiddleware, categoriesController.getSingleCategory);

// POST route to create a new category
router.post("/", authMiddleware, categoriesController.createCategory);

// PUT route to update an existing category
router.put("/:id", authMiddleware, categoriesController.updateCategory);

// DELETE route to delete a category
router.delete("/:id", authMiddleware, categoriesController.deleteCategory);

export default router;
