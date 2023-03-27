import express from "express";

import { signIn, signUp } from "../controllers/auth.js";


const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/form", educationInfo);

export default router;
