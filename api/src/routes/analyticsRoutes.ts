import express from "express";
import analyticsController from "../controllers/analyticsController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve analytics data
router.get("/", authMiddleware, analyticsController.getAnalyticsData);

export default router;
