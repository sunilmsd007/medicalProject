import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();

//route to create an admin
router.post('/registerAdmin', userController.registerAdmin);

//to create a user
router.post('/registerUser', userController.registerUser);

//to login
router.post('/login', userController.login);

export default router;