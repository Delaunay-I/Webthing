import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
    minLength: [8, "password should be longer"],
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("users", userSchema);
