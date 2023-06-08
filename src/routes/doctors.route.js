import express from 'express';
import * as doctorController from '../controllers/doctors.controller';
import upload from '../config/multer';
import uploads3 from '../config/multer';
import { userAuth, userAuthAdmin, userAuthForBoth } from '../middlewares/auth.middleware';
const router = express.Router();

//route to get all doctors
router.get('', userAuthForBoth, doctorController.getAllDoctors);

//route to create a new doctor
router.post('/createDoctor', uploads3.array('image'), doctorController.newDoctor); //uploads3.array('image')

//route to get a doctor
router.get('/getdoctor', userAuthForBoth, doctorController.getDoctor);

//route to get all doctors count from department
router.get('/getDoctorsCount', userAuthForBoth, doctorController.getDoctorsCountFromDepartment);

//route to get all doctors from department
router.get('/getDepartmentDoctors', userAuthForBoth, doctorController.getDoctorsFromDepartment);

//route to count doctor by department
router.get('/pagination', userAuthForBoth, doctorController.pagination);

export default router;
