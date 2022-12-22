import express from 'express';

import { protect } from '../middleware/authMiddleware.js';

import { createNewWorkout } from '../controllers/workouts/workoutController.js';

const router = express.Router();

router.route('/').post(protect, createNewWorkout);

export default router;
