import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;

const exerciseLogSchema = mongoose.Schema({
	user: {
		type: ObjectId,
		ref: 'User',
		required: true,
	},

	workout: {
		type: ObjectId,
		ref: 'Workout',
		required: true,
	},
	exercise: {
		type: ObjectId,
		ref: 'Workout',
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
	},
	times: [
		{
			weight: {
				type: Number,
				required: true,
			},
			repeat: {
				type: Number,
				required: true,
			},
		},
	],
});

const ExerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema);

export default ExerciseLog;
