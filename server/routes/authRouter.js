import { Router } from "express";

//Utilities
import { register, login } from ".././controllers/authController.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
