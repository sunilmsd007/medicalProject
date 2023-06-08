import express from 'express';
const router = express.Router();

import doctorRoute from './doctors.route';
import departmentRoute from './department.route';
import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/doctors', doctorRoute);
  router.use('/department', departmentRoute);
  router.use('/access', userRoute);

  return router;
};

export default routes;
