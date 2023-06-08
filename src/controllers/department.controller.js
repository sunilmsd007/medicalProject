import HttpStatus from 'http-status-codes';
import * as DepartmentService from '../services/department.service';

/**
 * Controller to get all department available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getAllDepartments = async (req, res, next) => {
    try {
      const data = await DepartmentService.getAllDepartments();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All department fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
 * Controller to create a new department
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createDepartment = async (req, res, next) => {
    try {
      const data = await DepartmentService.createDepartment(req.body, req.file);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Department created successfully'
      });
    } catch (error) {
      next(error);
    }
  };