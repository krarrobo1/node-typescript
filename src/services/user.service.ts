import { BaseService } from "./base.service";
import { UserModel } from '../models/User';

export default class UserService extends BaseService{
    constructor(){
        super(UserModel);
    }

    async getByName(name: string){
        let response = await this.model.findOne({ name });
        return response;
    }
}