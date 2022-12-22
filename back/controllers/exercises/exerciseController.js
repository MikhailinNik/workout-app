import asyncHandler from 'express-async-handler';
import Exercise from '../../models/exerciseModel.js';

// @desc    Create new exercise
// @route   POST /api/exercises
// @access  Private
export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, imageName } = req.body;

	console.log(req.body);

	const exercise = await Exercise.create({
		name,
		times,
		imageName,
	});

	res.json(exercise);
});
