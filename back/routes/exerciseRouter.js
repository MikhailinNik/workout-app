import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

import { createNewExercise } from '../controllers/exercises/exerciseController.js';

const router = express.Router();

router.route('/').post(protect, createNewExercise);

export default router;
