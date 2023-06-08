import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import logger from '../config/logger';

/**
 * Controller to register an admin
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const registerAdmin = async (req, res, next) => {
  try {
    const data = await UserService.registerAdmin(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
    logger.info("User created successfully ")
  } catch (error) {
    logger.error(error)
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

//Controller to register an user
export const registerUser = async (req, res, next) => {
    try {
      const data = await UserService.registerUser(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User created successfully'
      });
      logger.info("User created successfully ")
    } catch (error) {
      logger.error(error)
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };

  /**
 * Controller to login
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const login = async (req, res, next) => {
    try {
      const data = await UserService.login(req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: "user login successfully "
      });
      logger.info("user login successfully ")
    } catch (error) {
      logger.error(error)
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  }
  