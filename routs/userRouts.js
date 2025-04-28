import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();
////////////////// Induces////////////////////


router.get("/", userController.userInfo);
router.get("/information", userController.getUser);
router.get("/:id", userController.getUserById);
// delete
router.delete("/:id", userController.deleteUser);
router.post("/newUser", userController.newUser);
router.put("/:id", userController.updateUser);
router.patch("/:id", userController.patchUser);
router.get("/registration", userController.registration);

export default router;
