import express from "express";
import "dotenv/config";
import "./Database/database.js";
import userInformation from "./routs/userRouts.js";
import productsInformation from "./routs/productsRouts.js";
const app = express();
const PORT = process.env.PORT || 2025;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userInformation);
app.use("/products", productsInformation);

app.get("/", (req, res) => {
  res.send("Welcome to the fruits API");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
