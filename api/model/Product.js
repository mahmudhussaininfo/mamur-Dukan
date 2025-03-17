import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
    },
    sizes: {
      type: Array,
      enum: ["S", "M", "L", "XL", "XXL"],
      default: ["S"],
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("products", productSchema);

export default Product;
