import express from 'express';
import * as departmentController from '../controllers/department.controller';
import upload from '../config/multer';

const router = express.Router();

//route to get all departments
router.get('', departmentController.getAllDepartments);

//route to create a new department
router.post('',upload.single('department_image'), departmentController.createDepartment);

export default router;
