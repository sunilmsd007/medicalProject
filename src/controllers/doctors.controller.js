import HttpStatus from 'http-status-codes';
import * as DoctorService from '../services/doctors.service';

/**
 * Controller to get all doctors available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllDoctors = async (req, res, next) => {
  try {
    const data = await DoctorService.getAllDoctors();
    res.status(HttpStatus.OK).send(
      //{
     // code: HttpStatus.OK,
      data
     // message: 'All doctors fetched successfully'
    //}
    );
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to create a new doctor
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newDoctor = async (req, res, next) => {
  try {
    const data = await DoctorService.newDoctor(req.body, req.files); //req.files for multiple images
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Doctor created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a doctor available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getDoctor = async (req, res, next) => {
  try {
    const data = await DoctorService.getDoctor(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Doctor fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

//controller to get doctors count from department
export const getDoctorsCountFromDepartment = async (req, res, next) => {
  try {
    const data = await DoctorService.getDoctorsCountFromDepartment(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All doctors fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

//controller to get all doctors from department
export const getDoctorsFromDepartment = async (req, res, next) => {
  try {
    const data = await DoctorService.getDoctorsFromDepartment(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All doctors fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

//
export const pagination = async (req, res, next) => {
  try {
    const data = await DoctorService.pagination(req.query);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Doctor fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};