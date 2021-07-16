import { BaseService } from "./base.service";
import { UserModel } from '../models/User';
import { Credentials } from "../dtos/credentials.dto";
import bcryptjs from 'bcryptjs';

export default class UserService extends BaseService{
    constructor(){
        super(UserModel);
    }

    async getByName(name: string){
        let response = await this.model.findOne({ name });
        return response;
    }

    async logIn(credentials: Credentials){
        const { email, password } = credentials;
        let user = await this.model.findOne({ email });
        if(!user){
            throw new Error("Invalid credentials");
        }else{
            const toBeChecked = bcryptjs.hashSync(password, user.salt);
            if(toBeChecked !== user.password){
                throw new Error("Invalid credentials");
            }
        }
        return user;
    }
}