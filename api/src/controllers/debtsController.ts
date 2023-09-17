import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET route to retrieve a list of debts owed by or to the user
export const getUserDebts = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming you have the user ID in req.user

    // Retrieve a list of debts owed by or to the user
    const debts = await prisma.userDebt.findMany({
      where: {
        OR: [
          {
            debtorId: userId,
          },
          {
            creditorId: userId,
          },
        ],
      },
    });

    res.status(200).json(debts);
  } catch (error) {
    console.error("Error fetching user debts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET route to retrieve a specific debt by ID
export const getDebtById = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming you have the user ID in req.user
    const debtId = parseInt(req.params.id, 10); // Assuming you pass debt ID as a parameter

    // Retrieve a specific debt by ID that is owed by or to the user
    const debt = await prisma.userDebt.findUnique({
      where: {
        id: debtId,
        OR: [
          {
            debtorId: userId,
          },
          {
            creditorId: userId,
          },
        ],
      },
    });

    if (!debt) {
      return res.status(404).json({ message: "Debt not found" });
    }

    res.status(200).json(debt);
  } catch (error) {
    console.error("Error fetching specific debt:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST route to create a new debt record
export const createDebt = async (req: Request, res: Response) => {
  // Implement the logic to create a new debt record here
};

// PUT route to update an existing debt record
export const updateDebt = async (req: Request, res: Response) => {
  // Implement the logic to update an existing debt record here
};

// DELETE route to delete a debt record
export const deleteDebt = async (req: Request, res: Response) => {
  // Implement the logic to delete a debt record here
};
