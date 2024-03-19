import { Router } from "express";
import Products from "../databse/models/Products.mjs";

const router = Router();

router.get("/", async (req, res) => {
  const data = await Products.find({});
  res.send(data);
});

export default router;
