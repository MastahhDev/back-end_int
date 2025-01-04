import { Router } from "express";
import { getAllAuthors, createAuthor, deleteAuthor, updateAuthor } from "../controllers/author/authorIndex.js";
import { authorize } from "../middlewares/auth/authorize.js";
import { protect } from "../middlewares/auth/protect.js";

const router = Router();

router.get("/", protect, getAllAuthors);
router.post("/", protect, createAuthor);
router.put("/", protect, updateAuthor);
router.delete("/:id", protect, authorize("admin"), deleteAuthor);

export default router;