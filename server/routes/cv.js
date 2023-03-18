import express from 'express';
import { createPost, updatePost, deletePost, likePost} from '../controllers/postController.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;

