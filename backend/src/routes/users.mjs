import { Router } from "express";

import { hashPassword, comparePassword } from "../utils/helpers.mjs";
import User from "../databse/models/Users.mjs";

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const { body } = req;
  body.password = hashPassword(body.password);
  const newUser = new User(body);

  try {
    const savedUser = await newUser.save();
    return res.status(201).send(savedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
});

router.post("/checkuserpass", async (req, res) => {
  const { password, username } = req.body;
  try {
    const findUser = await User.findOne({ username });
    if (!findUser) throw new Error("User not found!");
    if (!comparePassword(password, findUser.password))
      throw new Error("passwords do not match");
    res.status(200).send("passwords match!");
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

export default router;
