import express from "express";
import profileController from "../controllers/profileController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve user profile information
router.get("/", authMiddleware, profileController.getUserProfile);

// PUT route to update user profile information
router.put("/", authMiddleware, profileController.updateUserProfile);

export default router;
