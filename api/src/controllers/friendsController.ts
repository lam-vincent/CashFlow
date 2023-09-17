import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET route to retrieve a list of user's friends
export const getUserFriends = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming you have the user ID in req.user

    // Retrieve a list of user's friends based on the userId
    const userFriends = await prisma.friend.findMany({
      where: {
        userId: userId,
      },
    });

    res.status(200).json(userFriends);
  } catch (error) {
    console.error("Error fetching user's friends:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET route to retrieve a specific friend by ID
export const getFriendById = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming you have the user ID in req.user
    const friendId = parseInt(req.params.id, 10); // Assuming you pass friend ID as a parameter

    // Retrieve a specific friend by ID based on the userId and friendId
    const friend = await prisma.friend.findUnique({
      where: {
        id: friendId,
        userId: userId,
      },
    });

    if (!friend) {
      return res.status(404).json({ message: "Friend not found" });
    }

    res.status(200).json(friend);
  } catch (error) {
    console.error("Error fetching specific friend:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
