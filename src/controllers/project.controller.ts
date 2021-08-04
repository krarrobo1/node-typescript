import ProjectService from "../services/project.service";
import { Request, Response, NextFunction } from 'express';


const ProjectServiceInstance = new ProjectService();

export class ProjectController{
    async save(req: Request, res: Response, next: NextFunction){
        try {
            const response = await ProjectServiceInstance.save(req.body); 
            return res.json(response);
        } catch (error) {
            next(error);
        }
    }
    // Read
    async getByUserId(req: Request, res: Response, next: NextFunction){
        try {
            const { userId } = req.params;
            const response = await ProjectServiceInstance.getProjectsByUserId(userId);
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
            const response = await ProjectServiceInstance.update(id, body);
            return res.json(response);
        } catch (error) {
            next(error);            
        }
    }

    // Delete
    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params;
            const response = await ProjectServiceInstance.delete(id);
            return res.json(response);
        } catch (error) {
           next(error); 
        }
    }
   
}