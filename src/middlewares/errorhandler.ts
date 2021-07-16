import { Request, Response, NextFunction } from 'express';

export function fallback(err: any, req: Request, res: Response, next: NextFunction) {
    const { message } = err;
    return res.status(500).json({
        ok: false,
        message: message || "Algo salio mal..."
    })
}