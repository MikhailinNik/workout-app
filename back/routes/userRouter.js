import express from 'express';

import { registerController } from '../controllers/user/regController.js';
import { getUserController } from '../controllers/user/userController.js';

const router = express.Router();

router.route('/profile').get(getUserController);
router.route('/').post(registerController);

export default router;
