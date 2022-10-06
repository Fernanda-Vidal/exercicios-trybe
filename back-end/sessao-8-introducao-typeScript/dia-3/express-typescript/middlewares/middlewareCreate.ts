import { Request, Response, NextFunction } from 'express';
import StatusCodes from '../StatusCode';
import bookSchema from '../utils/schema';

export default function middlewareCreate (req: Request, res: Response, next: NextFunction) {
    const { error } = bookSchema.validate(req.body);
    console.log(error)
    if (error) return res.status(StatusCodes.BAD_REQUEST).json(error)
    next()
}