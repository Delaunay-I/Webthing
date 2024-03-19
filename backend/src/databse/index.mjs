import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to MongoDB Atlas."))
  .catch((err) => console.log(err.message));
