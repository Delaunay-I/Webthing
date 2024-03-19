import { Router } from "express";
import Products from "../databse/models/Products.mjs";

const router = Router();

router.get("/", async (req, res) => {
  const data = await Products.find({});
  res.send(data);
});

router.get("/:name", async (req, res) => {
  const { name } = req.params;
  const found = await Products.find({ name });
  if (found.length >= 1) {
    res.status(201).send(found);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", async (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Products({ name, price });
  await newProduct.save();
  res.send(200);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Products.findByIdAndUpdate(id, {
    ...req.body,
  });
  res.send(updatedProduct);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Products.findByIdAndDelete(id);
  res.sendStatus(200);
});

export default router;
