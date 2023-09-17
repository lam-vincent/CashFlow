import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ... Previous controller functions ...

// GET route to retrieve a specific member of a group by user ID
export const getGroupMemberById = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming you have the user ID in req.user
    const groupId = parseInt(req.params.id, 10); // Assuming you pass group ID as a parameter
    const memberUserId = parseInt(req.params.userId, 10); // Assuming you pass user ID as a parameter

    // Retrieve a specific member of a group by user ID, based on the userId, groupId, and memberUserId
    const groupMember = await prisma.group
      .findUnique({
        where: {
          id: groupId,
          members: {
            some: {
              userId: userId,
            },
          },
        },
      })
      .members({
        where: {
          userId: memberUserId,
        },
      });

    if (!groupMember || groupMember.length === 0) {
      return res.status(404).json({ message: "Member not found in the group" });
    }

    res.status(200).json(groupMember[0]); // Assuming there's only one matching member
  } catch (error) {
    console.error("Error fetching specific group member:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
