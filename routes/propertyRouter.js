import { Router } from "express";
import {
  createProperty,
  deleteProperty,
  getProperties,
  getPropertyById,
  updateProperty,
} from "../controllers/propertyController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

router.get("/", getProperties);
router.get("/find/:id", getPropertyById);
router.post("/", verifyAdmin, createProperty);
router.patch("/:id", verifyAdmin, updateProperty);
router.delete("/:id", verifyAdmin, deleteProperty);

export default router;
