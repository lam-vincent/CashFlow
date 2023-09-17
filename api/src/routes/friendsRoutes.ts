import express from "express";
import friendsController from "../controllers/friendsController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve a list of user's friends
router.get("/", authMiddleware, friendsController.getUserFriends);

// GET route to retrieve a specific friend by ID
router.get("/:id", authMiddleware, friendsController.getFriendById);

export default router;
