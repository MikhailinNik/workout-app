import express from 'express';

import { registerController } from '../controllers/user/regController.js';
import { getUserController } from '../controllers/user/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authController } from '../controllers/user/authController.js';

const router = express.Router();

router.route('/profile').get(protect, getUserController);
router.route('/login').post(authController);
router.route('/').post(registerController);

export default router;
