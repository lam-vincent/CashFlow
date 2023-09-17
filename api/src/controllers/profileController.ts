import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET route to retrieve user profile information
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming you have the user ID in req.user

    // Retrieve user profile information based on the userId
    const userProfile = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userProfile) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT route to update user profile information
export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming you have the user ID in req.user
    const { username, email } = req.body; // Assuming you want to update username and email

    // Update user profile information based on the userId
    const updatedUserProfile = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
        email,
        // Add other fields you want to update here
      },
    });

    res.status(200).json(updatedUserProfile);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
