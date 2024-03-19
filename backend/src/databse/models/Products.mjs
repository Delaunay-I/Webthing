import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  item: String,
  num: Number,
});

export default mongoose.model("products", productSchema);
