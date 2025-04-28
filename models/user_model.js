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

const blog_post = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assuming you have a User model
    required: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // post owner
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  imageUrls: [
    {
      type: String,
      trim: true,
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [blog_post],
  sharedPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // If it's a shared/reposted post
    default: null,
  },
  visibility: {
    type: String,
    enum: ["Public", "Friends", "Private"],
    default: "Public",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Post = mongoose.model("Post", postSchema);

export { User, products, Post };
