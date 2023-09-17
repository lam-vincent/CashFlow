import express from "express";
import debtsController from "../controllers/debtsController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve a list of debts owed by or to the user
router.get("/", authMiddleware, debtsController.getUserDebts);

// GET route to retrieve a specific debt by ID
router.get("/:id", authMiddleware, debtsController.getDebtById);

// POST route to create a new debt record
router.post("/", authMiddleware, debtsController.createDebt);

// PUT route to update an existing debt record
router.put("/:id", authMiddleware, debtsController.updateDebt);

// DELETE route to delete a debt record
router.delete("/:id", authMiddleware, debtsController.deleteDebt);

export default router;
