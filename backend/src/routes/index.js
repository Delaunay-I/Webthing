import { Router } from "express";
import productsRouter from "./products.js";
import usersRouter from "./users.js";
import ordersRouter from "./orders.js";

const router = Router()

router.use("/api/products", productsRouter);
router.use("/api/auth", usersRouter);
router.use("/api/orders", ordersRouter);


export default router;