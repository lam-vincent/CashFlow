import express from "express";
import budgetsController from "../controllers/budgetsController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve a list of user budgets
router.get("/", authMiddleware, budgetsController.getAllBudgets);

// GET route to retrieve a specific budget by ID
router.get("/:id", authMiddleware, budgetsController.getSingleBudget);

// POST route to create a new budget
router.post("/", authMiddleware, budgetsController.createBudget);

// PUT route to update an existing budget
router.put("/:id", authMiddleware, budgetsController.updateBudget);

// DELETE route to delete a budget
router.delete("/:id", authMiddleware, budgetsController.deleteBudget);

export default router;
