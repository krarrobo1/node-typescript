import { Schema, model, Document } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser extends Document{
    name: string;
    lastname: string;
    email: string;
    avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});

// 3. Create a Model.
export const UserModel = model<IUser>('User', schema);