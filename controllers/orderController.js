import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createErrorMsg } from '../utils/errorResponse.js'

import orderModel from '../models/orderModel.js'

export const createOrder = async (req, res, next) => {
  const newOrder = orderModel(req.body)
  try {
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const getAllOrders = async (req, res, next) => {
  console.log("reached");
  console.log(req.params.userId)
  try {
    const searchedOrders = await orderModel.find({ userId: req.params.userId })
    res.status(200).json(searchedOrders)
  } catch (error) {
    next(error)
  }
}