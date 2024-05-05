import mongoose from "mongoose";
import Order from "../databse/models/orderModel.js";

export const getOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(200).json(orders);
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "id is not valid for mongodb" });
    }
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ error: "order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getCustomerOrder = async (req, res) => {
  const { customerName } = req.params;
  try {
    const order = await Order.find({ customerName });
    if (!order.length) {
      return res.status(404).json({ error: "order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const postOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, { ...req.body });
    if (!updatedOrder) {
      return res.status(404).json({ error: "order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
