import mongoose from "mongoose";

const user = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Boolean },
});
const User = mongoose.model("User", user);

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Fruits",
      "Vegetables",
      "Dairy",
      "Meat",
      "Bakery",
      "Beverages",
      "Snacks",
      "Household",
      "Personal Care",
      "Other",
    ],
    default: "Other",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  unit: {
    type: String,
    required: true,
    enum: ["kg", "g", "lb", "oz", "liter", "ml", "piece", "pack"],
  },
  stock: {
    type: Number,
    default: 0,
    min: 0,
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const products = mongoose.model("product", product);

export { User, products };
