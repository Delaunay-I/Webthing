import { Router } from "express";
import productsRouter from "./products.js";
import usersRouter from "./users.js";

const router = Router()

router.use("/api/products", productsRouter);
router.use("/api/auth", usersRouter);


export default router;