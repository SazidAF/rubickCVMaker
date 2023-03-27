import express from 'express';
const router = express.Router();

import { infoUpdate } from '../controllers/basicInfo';


router.post("/education", infoUpdate);
router.post("/projects", infoUpdate);
router.post("/experince", infoUpdate);
router.post("/contacts", infoUpdate);
router.post("/skills", infoUpdate);

export default router;

