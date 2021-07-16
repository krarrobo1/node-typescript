import mongoose, { isValidObjectId, Model } from "mongoose";

export class BaseService {
    model: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;
    }
    // Create
    async save(createDto: any) {
        let response = await this.model.create(createDto);
        return response;
    }
    // Read
    async getById(id: any) {
        let response = await this.model.findById({_id: mongoose.Types.ObjectId(id)});
        if(!response){
            throw new Error("Not found!");
        }
        return response;
    }

    async getAll() {
        let response = await this.model.find();
        return response;
    }
    // Update
    async update(id: any, updatedData: any) {
        let response = await this.model.findByIdAndUpdate(id, updatedData, { new: true });
        if (!response) new Error("No se pudo encontrar el item");
        return response;
    }

    async delete(id: any) {
        let response = await this.model.findByIdAndDelete(id);
        if (!response) new Error("No se pudo encontrar el item");
        return response;
    }

}