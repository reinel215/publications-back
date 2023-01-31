import { ErrorRequestHandler } from 'express';

//middleware to log the errors
export const logErrors: ErrorRequestHandler = (err , req , res, next) => {
    console.error(err);
    next(err);
}