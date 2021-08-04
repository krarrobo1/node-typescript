import mongoose, { Schema, model, Document } from 'mongoose';
import { UserModel } from './User';

export interface IProject extends Document{
    title: String,
    user: mongoose.Types.ObjectId
    description: String,
    active: Boolean,
    client: String,
    stack: String[],
    images: String[]
}

const schema = new Schema<IProject>({
    user: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}, // Usamos el nombre del esquema del cual nos referimos
    title: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, default: true },
    client:{ type: String, required: true },
    stack: { type: [String], required: true},
    images: [String]
});

// Ejecuta la funcion antes de guardar un nuevo documento...
schema.pre('save', async function(next){
    const project = this;
    // Buscar el usuario antes de crear un proyecto nuevo...
    let res = await UserModel.findById({_id: project.user});

    if (!res) throw new Error("No se pudo encontrar el usuario");
    next();
});

export const ProjectModel = model<IProject>('Project', schema);