import User from '../../models/userModel.js';

//@desc      Register user
//@route     POST api/users
//@access    Public

export const registerController = async (req, res) => {
	const { email, password } = req.body;

	const isHaveUser = await User.findOne({ email });

	if (isHaveUser) {
		req.status(400);

		throw new Error('Данный пользователь уже зарегистрирован');
	}

	const user = await User.create({
		email,
		password,
	});

	res.json(user);
};
