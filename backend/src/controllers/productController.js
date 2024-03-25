import mongoose from "mongoose";

import Product from "../databse/models/productModel.js";

export const getProducts = async (req, res) => {
  const data = await Product.find({});
  res.send(data);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such product" });
  }

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ error: "no such product" });
  }

  res.status(200).json(product);
};

export const getProductByName = async (req, res) => {
  const { name } = req.params;
  const found = await Product.find({ name });
  if (found.length >= 1) {
    res.status(201).send(found);
  } else {
    res.sendStatus(404);
  }
};

export const postProduct = async (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });
  await newProduct.save();
  res.send(200);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such product" });
  }
  const updatedProduct = await Product.findByIdAndUpdate(id, {
    ...req.body,
  });
  if (!updatedProduct) {
    return res.status(404).json({ error: "no such product" });
  }
  res.status(200).send(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such product" });
  }
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({ error: "no such product" });
  }
  res.status(200).send(product);
};
