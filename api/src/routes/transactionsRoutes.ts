import express from "express";
import transactionsController from "../controllers/transactionsController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve a list of user transactions
router.get("/", authMiddleware, transactionsController.getAllTransactions);

// GET route to retrieve a specific transaction by ID
router.get("/:id", authMiddleware, transactionsController.getSingleTransaction);

// POST route to create a new transaction
router.post("/", authMiddleware, transactionsController.createTransaction);

// PUT route to update an existing transaction
router.put("/:id", authMiddleware, transactionsController.updateTransaction);

// DELETE route to delete a transaction
router.delete("/:id", authMiddleware, transactionsController.deleteTransaction);

export default router;
