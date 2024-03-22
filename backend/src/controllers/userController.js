import User from "../databse/models/userModel.js";
import { hashPassword, comparePassword } from "../utils/helpers.js";

export const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};
export const postUser = async (req, res) => {
  const { body } = req;
  body.password = hashPassword(body.password);
  const newUser = new User(body);

  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const loginUser = async (req, res) => {
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
};