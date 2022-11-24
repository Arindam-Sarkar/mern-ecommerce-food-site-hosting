import express from "express";

import {
  userLogin,
  userRegister,
  userUpdateAddress,
  userChangePass
} from "../controllers/userController.js";

import { verifyUser, verifyAdmin } from "../utils/veryfyToken.js";

const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.post("/updateAdd/:userId", userUpdateAddress)
router.post("/updatePass/:userId", userChangePass)
export default router