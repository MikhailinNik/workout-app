//@desc      Get user profile
//@route     GET api/users/profile
//@access    Private

export const getUserController = (req, res) => {
	const user = {
		name: 'Nikita',
		age: 26,
	};

	res.json(user);
};
