import { Router } from "express";
import {
  getCustomerOrder,
  getOrderById,
  getOrders,
  postOrder,
  updateOrder,
} from "../controllers/orderControllers.js";

const router = Router();

router.get("/", getOrders);
router.get("/customer/:customerName", getCustomerOrder);
router.get("/id/:id", getOrderById);
router.post("/", postOrder);
router.patch("/:id", updateOrder);
// router.delete("/:id", deleteOrder);

export default router;
