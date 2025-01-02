import { Router } from "express";
import { getAllAuthors, createAuthor, deleteAuthor, updateAuthor } from "../controllers/author/authorIndex";
import { authorize } from "../middlewares/auth/authorize";
import { protect } from "../middlewares/auth/protect";

const router = Router();

router.get("/", protect, getAllAuthors);
router.post("/", protect, createAuthor);
router.put("/", protect, updateAuthor);
router.delete("/:id", protect, authorize("admin"), deleteAuthor);

export default router;