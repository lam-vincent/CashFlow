import express from "express";
import { body } from "express-validator";
import { register, login } from "./authController";

const router = express.Router();

// Define routes for user registration and login
router.post(
  "/register",
  [
    body("username").trim().notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  register
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  login
);

export default router;
