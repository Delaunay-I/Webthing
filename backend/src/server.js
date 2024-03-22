import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import productsRouter from "./routes/products.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/products", productsRouter);
app.use("/auth/users", usersRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(
      PORT,
      console.log(`Connected to db and listening on port ${PORT}`),
    ),
  )
  .catch((err) => console.log(err.message));
