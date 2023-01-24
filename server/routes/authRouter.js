import { Router } from "express";

//Utilities
import { register, login, logout } from ".././controllers/authController.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

export default router;
