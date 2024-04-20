import { Router } from "express";
import { getOrderById, getOrders, postOrder } from "../controllers/orderControllers.js";

const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
// router.get("/:customerName", getCustomerOrder);
router.post("/", postOrder);
// router.patch("/:id", updateOrder);
// router.delete("/:id", deleteOrder);

export default router;
