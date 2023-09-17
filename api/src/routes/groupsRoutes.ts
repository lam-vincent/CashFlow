import express from "express";
import groupsController from "../controllers/groupsController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// GET route to retrieve a list of user's groups
router.get("/", authMiddleware, groupsController.getUserGroups);

// GET route to retrieve a specific group by ID
router.get("/:id", authMiddleware, groupsController.getGroupById);

// GET route to retrieve members of a specific group
router.get("/:id/members", authMiddleware, groupsController.getGroupMembers);

// GET route to retrieve a specific member of a group by user ID
router.get(
  "/:id/members/:userId",
  authMiddleware,
  groupsController.getGroupMemberById
);

export default router;
