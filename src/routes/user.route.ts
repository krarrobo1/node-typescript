import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
const UserControllerInstance = new UserController();

export const userRoutes = Router();

userRoutes.post("/", UserControllerInstance.save);