import { Schema, model, Document } from 'mongoose';
import bcryptjs from 'bcryptjs';

// 1. Create an interface representing a document in MongoDB.
interface Experience {
    title: String; // Backend-frontend
    employmentType: String, // fulltime, freelancer, mid-time
    company: String, // LojaDev
    location: String, // Loja, Ecuador, USA
    startDate: Date, // 2021
    endDate?: Date, // 2022
    actual: Boolean // true
}

interface Contact {
    email: String;
    phoneNumber: String
}

interface SocialNetworks {
    fb: String;
    twitter: String;
    linkedin: String;
    github: String;
}


export interface IUser extends Document {
    name: string; // nombres
    lastname: string; // apellidos
    title: string; // titulo
    aboutme: string; // pequena descripcion
    description: string; // +Extensa
    email: string; // ricardoarrobo@gmail.com
    password: string;
    salt: string
    experiences: Experience[],
    contact: Contact;
    avatar?: string;
    image?:string;
    socialNetworks: SocialNetworks
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    title: { type: String, required: true },
    aboutme: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: String,
    salt: { type: String },
    experiences: [{
        title: String,
        employmentType: String,
        company: String,
        location: String,
        startDate: Date,
        endDate: Date,
        actual: Boolean
    }],
    contact: { email: String, phoneNumber: String },
    socialNetworks: {
        fb: String,
        twitter: String,
        linkedin: String,
        github: String
    },
    avatar: String
});

// 4 tablas

/// 

// Encrypt Password w/ bcryptJS
// Middleware se ejecutara antes de guardar el documento en la BD.
schema.pre('save', async function(next){
    const user = this;
    if(!user.isModified("password")){
        return next();
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(user.password, salt);
    user.password = hashedPassword;
    user.salt = salt;
    next();
})

// 3. Create a Model.
export const UserModel = model<IUser>('User', schema);