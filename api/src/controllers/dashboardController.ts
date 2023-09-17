// dashboardController.ts
import { Request, Response } from "express";
import { User } from "@prisma/client"; // Import your Prisma User model here

// Define the getDashboardData function
export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const user = req.user as User; // Assuming your req.user is of type User

    const dashboardData = {
      username: user.username,
      email: user.email,
      accountCreationDate: user.createdAt,
      totalBalance: user.balance,
      totalDebtOwedToUser: user.debtOwedToUser,
      totalDebtOwedByUser: user.debtOwedByUser,
      recentTransactions: user.transactions.slice(0, 5),
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
