import { BaseService } from "./base.service";
import { UserModel } from '../models/User';
import { Credentials } from "../dtos/users/credentials.dto";
import bcryptjs from 'bcryptjs';
import { LoginError } from "../errors/loginerror";

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
            throw new LoginError("Invalid credentials", 401);
        }else{
            const toBeChecked = bcryptjs.hashSync(password, user.salt);
            if(toBeChecked !== user.password){
                throw new LoginError("Invalid credentials", 401);
            }
        }
        return user;
    }

}