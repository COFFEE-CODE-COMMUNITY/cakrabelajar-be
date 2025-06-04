import { Router } from "express";
import userRoutes from "./userRoutes.js";
// import userRoutes from './user.js'; // Contoh modular route

const router = Router();

router.use("/users", userRoutes);

// router.use('/users', userRoutes); // Contoh modular route

router.get("/health", (req, res) => res.json({ status: "ok" }));

export default router;
