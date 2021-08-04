import { Router } from 'express';
import { ProjectController } from '../controllers/project.controller';

const ProjectControllerInstance = new ProjectController();

export const projectRoutes = Router();

// /project
projectRoutes.post('/', ProjectControllerInstance.save);

// /project/:idDelUsuario
projectRoutes.get('/:userId', ProjectControllerInstance.getByUserId);

// /project/:idDelProject
projectRoutes.put('/:id', ProjectControllerInstance.update);

// /project/:idDelProject
projectRoutes.delete('/:id', ProjectControllerInstance.delete);
