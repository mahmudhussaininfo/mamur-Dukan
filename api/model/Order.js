import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Order Placed",
    },
    payment: {
      type: Boolean,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("orders", orderSchema);

export default Order;
