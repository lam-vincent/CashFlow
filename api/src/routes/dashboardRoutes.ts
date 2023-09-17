// dashboardRoutes.ts
import express from "express";
import dashboardController from "../controllers/dashboardController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve user-specific dashboard data
router.get("/", authMiddleware, dashboardController);

export default router;
