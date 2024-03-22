import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    size: String,
  },
  { timestamps: true },
);

// builds a collection with the name 'products' for us
export default mongoose.model("product", productSchema);
