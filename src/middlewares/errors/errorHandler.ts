'use strict';
import { ErrorRequestHandler } from 'express';

//error middleware to response to the front
export const errorHandler : ErrorRequestHandler = (err, req, res, next) => {

    const errorResponse = {
        status : 0,
        message: ""
    }

    errorResponse.status = err.status ? err.status : 500
    errorResponse.message = err.message ? err.message : "Something went wrong"

    res.status(errorResponse.status).json(
        {
            error : errorResponse.message
        }
    );
}