import express from "express";
import * as CartController from "../controllers/cartController";

const router = express.Router();

router.post("/", CartController.createCart);
router.get("/:id", CartController.getCart);
router.put("/:id", CartController.updateCart);
router.delete("/:id", CartController.deleteCart);

export default router;
