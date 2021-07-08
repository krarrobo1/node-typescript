import express, { Application } from 'express';
import { userRoutes } from './user.route';

export const routerApp: Application = express();
routerApp.use('/user', userRoutes);
