import express from "express";
import dotenv from "dotenv";

import productsRouter from "./routes/products.mjs";

dotenv.config();

import "./databse/index.mjs";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

app.use("/api/products", productsRouter);

app.listen(PORT, console.log(`Running on port ${PORT}`));
