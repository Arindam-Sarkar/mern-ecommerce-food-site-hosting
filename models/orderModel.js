import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId:
  {
    type: String
  },
  orderId:
  {
    type: String
  },
  orderAmount:
  {
    type: Number
  },
  shippingAmount: {
    type: Number
  },
  orderDate:
  {
    type: String
  },
  orderTime:
  {
    type: String
  },
  orderSpecialInstructions:
  {
    type: String
  },
  orderItems:
  {
    type: Array
  }
}, {
  timestamps: true,
  collection: 'orders'
})

export default mongoose.model("Order", OrderSchema);