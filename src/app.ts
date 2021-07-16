import express, { Application } from 'express';

import { routerApp } from './routes';
import { fallback } from './middlewares/errorhandler';
export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerApp);
app.use(fallback);
