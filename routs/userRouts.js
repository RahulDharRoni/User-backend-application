import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.userInfo);
router.get("/information", userController.getUser);
router.get("/registration", userController.registration);
router.get("/:id", userController.getUserById);

// New user
router.post("/newUser", userController.newUser);
router.put("/:id", userController.updateUser);
router.patch("/:id", userController.patchUser);
router.delete("/:id", userController.deleteUser);

export default router;
