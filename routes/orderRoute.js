import express from "express";

import {
  createOrder,
  getAllOrders
} from "../controllers/orderController.js";

import { verifyUser, verifyAdmin } from "../utils/veryfyToken.js";

const router = express.Router()

router.post("/create", createOrder)
router.get("/getall/:userId", getAllOrders)

export default router