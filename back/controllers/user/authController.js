import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
import { generateToken } from '../../helpers/getGenerateToken.js';

//@desc      Auth user
//@route     POST api/users/login
//@access    Public

export const authController = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		const token = generateToken(user._id);

		res.json({ user, token });
	}
});
