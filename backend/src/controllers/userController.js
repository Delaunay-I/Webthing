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

export const login = (req, res) => {
  res.sendStatus(200);
};

export const logout = (req, res) => {
  if (!req.user) return res.sendStatus(401);
  req.logout((err) => {
    if (err) return res.sendStatus(400);
    res.sendStatus(200);
  });
};

export const checkStatus = (req, res) => {
  return req.user ? res.send(req.user) : res.sendStatus(401);
};
