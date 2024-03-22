import { Router } from "express";
import {
  deleteProduct,
  getProductById,
  getProductByName,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/:name", getProductByName);
router.post("/", postProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
