import mongoose from "mongoose";
import { Status } from "../service/message.js";
const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      require: true,
    },
    partsId: {
      type: mongoose.Types.ObjectId,
      ref: "parts",
      require: true,
    },
    priceTotal: {
      type: Number,
      require: true,
    },
    addressId: {
      type: mongoose.Types.ObjectId,
      ref: "address",
      require: true,
    },
    startTime: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      values: Object.values(Status),
      default: Status.await,
    },
    is_Active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("order", orderSchema);
export default Order;
