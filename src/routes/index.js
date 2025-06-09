import { Router } from "express";
import authRouter from "./authRoute.js";
import userRouter from "./userRoute.js";

const router = Router();

// Auth Route
router.use("/auth", authRouter)

// User Route
router.use("/users", userRouter)

// Health Route
router.get("/health", (req, res) => res.json({ message: "Ok", data: {}}))

export default router