import { Router } from "express";
import { registerController } from "../controllers/auth/registerController";
import { loginController } from "../controllers/auth/loginController";
import { refreshController } from "../controllers/auth/refreshController";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/refresh", refreshController);

export default router;