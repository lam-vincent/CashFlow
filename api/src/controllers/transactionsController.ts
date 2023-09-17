import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET route to retrieve a list of user transactions
export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    // Retrieve user-specific transactions
    const userId = req.user.id; // Assuming you have the user ID in req.user
    const transactions = await prisma.transaction.findMany({
      where: { userId },
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET route to retrieve a specific transaction by ID
export const getSingleTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = parseInt(req.params.id, 10); // Extract the transaction ID from the URL
    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST route to create a new transaction
export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { title, amount, description, date, categoryId } = req.body;
    const userId = req.user.id; // Assuming you have the user ID in req.user

    const newTransaction = await prisma.transaction.create({
      data: {
        title,
        amount,
        description,
        date,
        categoryId,
        userId,
      },
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT route to update an existing transaction
export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = parseInt(req.params.id, 10); // Extract the transaction ID from the URL
    const { title, amount, description, date, categoryId } = req.body;

    const updatedTransaction = await prisma.transaction.update({
      where: { id: transactionId },
      data: {
        title,
        amount,
        description,
        date,
        categoryId,
      },
    });

    res.status(200).json(updatedTransaction);
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE route to delete a transaction
export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = parseInt(req.params.id, 10); // Extract the transaction ID from the URL

    await prisma.transaction.delete({
      where: { id: transactionId },
    });

    res.status(204).end(); // No content in response
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
