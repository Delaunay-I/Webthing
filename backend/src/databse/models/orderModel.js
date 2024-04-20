import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      minLength: [3, "name should be at least 3 letters"],
    },
    name: {
      type: String,
      required: true,
      minLength: [4, "order name is too short"],
    },
    size: {
      type: String,
      enum: ["small", "medium", "large", "xl"],
      required: true,
    },
    number: { type: Number, default: 1, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("orders", orderSchema);
