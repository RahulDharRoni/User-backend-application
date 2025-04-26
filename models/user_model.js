import mongoose from "mongoose";

const user = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Boolean, default: false },
});
const User = mongoose.model("User", user);

export { User };
