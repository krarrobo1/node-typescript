import UserService from '../services/user.service';
import { Request, Response, NextFunction } from 'express';

const UserServiceInstance = new UserService();

export class UserController{
    async save(req: Request, res: Response, next: NextFunction){
        const response = await UserServiceInstance.save(req.body);
        return res.json(response);
    }
}