import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
const UserControllerInstance = new UserController();

export const userRoutes = Router();
// /user
userRoutes.post("/", UserControllerInstance.save);
// /user/:id
userRoutes.get("/:id", UserControllerInstance.getById);
// /user/:id
userRoutes.put('/:id', UserControllerInstance.update);
// /user/:id
userRoutes.delete('/:id', UserControllerInstance.delete);