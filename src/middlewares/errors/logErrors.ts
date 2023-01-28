import { ErrorRequestHandler } from 'express';


export const logErrors: ErrorRequestHandler = (err , req , res, next) => {
    console.error(err);
    next(err);
}