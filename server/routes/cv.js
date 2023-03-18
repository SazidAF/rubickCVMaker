import express from 'express';
import { createCV, updateCV, deleteCV} from '../controllers/cv.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.post("/:id", auth, createCV);
router.patch("/:id", auth, updateCV);
router.delete("/:id", auth, deleteCV);

export default router;

