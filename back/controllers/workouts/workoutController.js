import asyncHandler from 'express-async-handler';
import Workout from '../../models/workoutModel.js';

// @desc    Create new workout
// @route   POST /api/workouts
// @access  Private

export const createNewWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body;
	const workout = await Workout.create({
		name,
		exercises: exerciseIds,
	});

	res.json(workout);
});
