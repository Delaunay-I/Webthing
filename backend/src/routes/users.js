import { Router } from "express";

import {
  getUsers,
  loginUser,
  postUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.post("/login", loginUser);

export default router;
