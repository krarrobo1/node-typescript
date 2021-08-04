import { Request, Response, NextFunction } from 'express';
import { LoginError } from '../errors/loginerror';


// Manejar los errores
export function fallback(err: any, req: Request, res: Response, next: NextFunction) {
    const { message, statusCode } = err;

    let respuesta = {
        ok: false,
        errorType: 'Normal',
        message: message || 'Algo salio mal...'
    }

    if(err instanceof LoginError){
        respuesta.errorType = "Login";
    }

    return res.status(statusCode || 500).json(respuesta);
}