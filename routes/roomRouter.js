import { Router } from "express";
import {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/roomController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

router.get("/", getRooms);

router.get("/:id", getRoomById);

router.post("/:propertyid", verifyAdmin, createRoom);

router.patch("/:id", verifyAdmin, updateRoom);

router.delete("/:propertyid/:id", verifyAdmin, deleteRoom);

export default router;
