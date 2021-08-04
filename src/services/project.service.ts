import { BaseService } from './base.service';
import { ProjectModel } from '../models/Project';
import mongoose, { isValidObjectId, Model } from "mongoose";

export default class ProjectService extends BaseService{
    constructor(){
        super(ProjectModel);
    }

    async getProjectsByUserId(userId: any){
        let projects = await ProjectModel.find({ user: mongoose.Types.ObjectId(userId) })
        .populate({ path: 'user', select: 'name lastname'});
        return projects;
    }

}