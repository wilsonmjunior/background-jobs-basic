import { Router } from 'express';
import usersController from './app/controllers/UsersController';

const routes = Router();


routes.post('/users', usersController.store);

export default routes;
