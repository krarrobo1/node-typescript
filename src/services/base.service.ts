import { Model } from "mongoose";
import { IUser } from "../models/User";

export class BaseService {
    model: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;
    }

    async save(createDto: any){
        return await this.model.create(createDto);
    }

}