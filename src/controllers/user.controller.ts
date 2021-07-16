import UserService from '../services/user.service';
import { Request, Response, NextFunction } from 'express';

const UserServiceInstance = new UserService();

export class UserController{
    // Create
    // Request --> La peticion que nos hace el usuario.
    // Response --> Lo que nosotros respondemos al usuario.
    async save(req: Request, res: Response, next: NextFunction){
        try {
            const response = await UserServiceInstance.save(req.body);
            return res.json(response);
        } catch (error) {
            next(error);
        }
    }
    // Read
    async getById(req: Request, res: Response, next: NextFunction){
        // req.params.id --> destructuracion.
        try {
            const { id } = req.params;
            const response = await UserServiceInstance.getById(id);
            return res.json(response);
        } catch (error) {
            next(error);            
        }
    }

    // Update
    async update(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params;
            const { body } = req;
            const response = await UserServiceInstance.update(id, body);
            return res.json(response);
        } catch (error) {
            next(error);            
        }
    }

    // Delete
    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params;
            const response = await UserServiceInstance.delete(id);
            return res.json(response);
        } catch (error) {
           next(error); 
        }
    }

    async logIn(req: Request, res: Response, next: NextFunction){
        try {
            const { body } = req;
            const response = await UserServiceInstance.logIn(body);
            return res.json(response);
        } catch (error) {
            next(error);            
        }
    }

}