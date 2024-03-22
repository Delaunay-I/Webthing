import { Router } from "express";
import mongoose from "mongoose";

import Product from "../databse/models/productModel.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await Product.find({});
  res.send(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such product" });
  }

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ error: "no such product" });
  }

  res.status(200).json(product);
});

router.get("/:name", async (req, res) => {
  const { name } = req.params;
  const found = await Product.find({ name });
  if (found.length >= 1) {
    res.status(201).send(found);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", async (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });
  await newProduct.save();
  res.send(200);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(id, {
    ...req.body,
  });
  res.send(updatedProduct);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.sendStatus(200);
});

export default router;
