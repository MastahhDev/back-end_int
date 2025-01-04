import { Router } from "express";
import { registerController } from "../controllers/auth/registerController.js";
import { loginController } from "../controllers/auth/loginController.js";
import { refreshController } from "../controllers/auth/refreshController.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/refresh", refreshController);

export default router;