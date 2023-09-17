import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET route to retrieve a list of user budgets
export const getAllBudgets = async (req: Request, res: Response) => {
  try {
    // Retrieve user-specific budgets
    const userId = req.user.id; // Assuming you have the user ID in req.user
    const budgets = await prisma.budget.findMany({
      where: { userId },
    });

    res.status(200).json(budgets);
  } catch (error) {
    console.error("Error fetching budgets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET route to retrieve a specific budget by ID
export const getSingleBudget = async (req: Request, res: Response) => {
  try {
    const budgetId = parseInt(req.params.id, 10); // Extract the budget ID from the URL
    const budget = await prisma.budget.findUnique({
      where: { id: budgetId },
    });

    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json(budget);
  } catch (error) {
    console.error("Error fetching budget:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST route to create a new budget
export const createBudget = async (req: Request, res: Response) => {
  try {
    const { limit, categoryId } = req.body;
    const userId = req.user.id; // Assuming you have the user ID in req.user

    const newBudget = await prisma.budget.create({
      data: {
        limit,
        categoryId,
        userId,
      },
    });

    res.status(201).json(newBudget);
  } catch (error) {
    console.error("Error creating budget:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT route to update an existing budget
export const updateBudget = async (req: Request, res: Response) => {
  try {
    const budgetId = parseInt(req.params.id, 10); // Extract the budget ID from the URL
    const { limit, categoryId } = req.body;

    const updatedBudget = await prisma.budget.update({
      where: { id: budgetId },
      data: {
        limit,
        categoryId,
      },
    });

    res.status(200).json(updatedBudget);
  } catch (error) {
    console.error("Error updating budget:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE route to delete a budget
export const deleteBudget = async (req: Request, res: Response) => {
  try {
    const budgetId = parseInt(req.params.id, 10); // Extract the budget ID from the URL

    await prisma.budget.delete({
      where: { id: budgetId },
    });

    res.status(204).end(); // No content in response
  } catch (error) {
    console.error("Error deleting budget:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
