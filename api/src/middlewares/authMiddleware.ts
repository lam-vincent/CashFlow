import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { config } from "dotenv";

config();
const secretKey: Secret = process.env.SECRET_KEY || "";

interface AuthenticatedRequest extends Request {
  userId?: number;
}

// Middleware to authenticate and authorize requests
export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("Unauthorized");
    }

    // Verify the JWT token and extract the userId
    const decoded = jwt.verify(token, secretKey) as { userId: number };
    const { userId } = decoded;

    // Add the userId to the request object for future use
    req.userId = userId;

    next();
  } catch (error) {
    console.error("Error verifying JWT:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
