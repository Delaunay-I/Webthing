import { Router } from "express";
import passport from "passport";

import {
  checkStatus,
  getUserById,
  getUsers,
  login,
  logout,
  postUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", postUser);
router.post("/login", passport.authenticate("local"), login);
router.post("/logout", logout);
router.get("/status", checkStatus);

export default router;
