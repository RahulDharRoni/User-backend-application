import express from "express";
import {
  create_products,
  get_products,
  new_products,
  registration,
  update_products,
  delete_products,
  get_productsById,
  patch_products,
} from "../controllers/productsControllers.js";

const router = express.Router();

router.get("/", create_products);
router.get("/all_products", get_products);
router.get("/products_html", registration);
router.get("/:id", get_productsById);
router.delete("/:id", delete_products);

// New user
router.post("/post_new_product", new_products);
router.put("/:id", update_products);
router.patch("/:id", patch_products);


export default router;
