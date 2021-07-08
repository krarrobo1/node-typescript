import express, { Application } from 'express';

import { routerApp } from './routes';
export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerApp);
