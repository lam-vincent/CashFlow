import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import transactionsRoutes from "./routes/transactionsRoutes";
import profileRoutes from "./routes/profileRoutes";
import groupsRoutes from "./routes/groupsRoutes";
import friendsRoutes from "./routes/friendsRoutes";
import debtsRoutes from "./routes/debtsRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import categoriesRoutes from "./routes/categoriesRoutes";
import budgetsRoutes from "./routes/budgetsRoutes";
import analyticsRoutes from "./routes/analyticsRoutes";

import { authMiddleware } from "./middlewares/authMiddleware";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// app.use(
//   session({
//     secret: "your-secret-key", // Change this to a secure secret
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(flash());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/groups", groupsRoutes);
app.use("/api/friends", friendsRoutes);
app.use("/api/debts", debtsRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/budgets", budgetsRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use(authMiddleware);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
