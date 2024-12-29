import express from "express";
import { register, login } from "../controllers/authorController";

const router = express.Router();

router.post("/authors/register", register);
router.post("/authors/login", login);

export default router;
