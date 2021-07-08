import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    APP_NAME: process.env.APP_NAME || 'Personal Portfolio',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/portafolio'
}