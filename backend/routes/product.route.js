import express from "express";
import {createProduct, deleteProduct, getProduct, updatedProduct} from "../controllers/product.controller.js"

const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updatedProduct);

export default router;
