import express from "express";
import {
  create_blog_post,
  get_blog_post,
  new_blog_post,
  registration,
  update_blog_post,
  delete_blog_post,
  get_blog_postById,
  patch_blog_post,
} from "../controllers/blogPostControllers.js";

const router = express.Router();

router.get("/", create_blog_post);
router.get("/all_blog_post", get_blog_post);
router.get("/blog_post_html", registration);
router.get("/:id", get_blog_postById);

// New user
router.post("/post_new_product", new_blog_post);
router.put("/:id", update_blog_post);
router.patch("/:id", patch_blog_post);
router.delete("/:id", delete_blog_post);

export default router;
