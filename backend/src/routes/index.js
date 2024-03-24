import { Router } from "express";
import productsRouter from "./products.js";
import usersRouter from "./users.js";

const router = Router()

router.use("/api/products", productsRouter);
router.use("/auth/users", usersRouter);


export default router;