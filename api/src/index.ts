import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "your-secret-key", // Change this to a secure secret
    resave: false,
    saveUninitialized: false,
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

// Initialize connect-flash middleware
app.use(flash());

app.use(authMiddleware);

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
