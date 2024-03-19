import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  size: String
});

export default mongoose.model("products", productSchema);
