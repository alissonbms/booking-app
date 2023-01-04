import { Router } from "express";
import {
  countByCountry,
  countByType,
  createProperty,
  deleteProperty,
  getProperties,
  getPropertyById,
  getPropertyRooms,
  getPropertyByRoomID,
  updateProperty,
} from "../controllers/propertyController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

router.get("/", getProperties);
router.get("/find/:id", getPropertyById);
router.get("/rooms/:id", getPropertyRooms);
router.get("/findByRoom", getPropertyByRoomID);

getPropertyByRoomID;
router.get("/countByCountry", countByCountry);
router.get("/countByType", countByType);

router.post("/", verifyAdmin, createProperty);
router.patch("/:id", verifyAdmin, updateProperty);
router.delete("/:id", verifyAdmin, deleteProperty);

export default router;
