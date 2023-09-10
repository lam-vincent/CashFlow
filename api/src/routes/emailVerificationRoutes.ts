import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router();

// Email verification route
router.get("/verify/:token", async (req: Request, res: Response) => {
  const { token } = req.params;

  try {
    // Verify the token
    const decodedToken: any = jwt.verify(token, "your-secret-key");

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user's account status to 'verified'
    await prisma.user.update({
      where: { id: decodedToken.userId },
      data: { isVerified: true },
    });

    // Redirect the user to a verification success page
    res.redirect("/verification-success.html");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Verification failed" });
  }
});

export default router;
