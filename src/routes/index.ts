import express, { Application } from 'express';
import { userRoutes } from './user.route';
import { projectRoutes } from './project.route';

export const routerApp: Application = express();
routerApp.use('/user', userRoutes);
routerApp.use('/project', projectRoutes);
