import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";

// importing routes
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 60000 * 60,
  }
}));
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(
      PORT,
      console.log(`Connected to db and listening on port ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));


app.get("/", (req, res) => {
  console.log(req.session)
  console.log(req.session.id)
  req.session.visited = true

  res.status(200).send("hello there!")
})
