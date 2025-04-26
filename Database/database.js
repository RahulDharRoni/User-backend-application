import "dotenv/config";
import mongoose from "mongoose";

const { URI } = process.env;
console.log(URI);

const db_connection = async () => {
  if (!URI) {
    throw new Error("URI is not defined!!!");
  }
  await mongoose.connect(URI).then(() => console.log("Database Connected"));
};

db_connection();
