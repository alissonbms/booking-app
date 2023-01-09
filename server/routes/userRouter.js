import { Router } from "express";

//Utilities
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

router.get("/", verifyAdmin, getUsers);

router.get("/:id", verifyUser, getUserById);

router.patch("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);

export default router;
