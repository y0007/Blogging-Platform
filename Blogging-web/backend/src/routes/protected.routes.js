import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Example protected route
router.get("/protected", verifyJWT, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
});

// Add more protected routes here

export default router;
