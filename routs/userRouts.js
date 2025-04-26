import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.userInfo);
router.get("/information", userController.getUser);

// New user
router.post("/newUser", userController.newUser);

export default router;
