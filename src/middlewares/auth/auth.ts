import { NextFunction, Request, Response } from 'express';

//middleware to authenticate the user throgh passport
const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated())
        next();
    else
        next({ status: 401, message: "Your not authorized!!" });
}


export default isAuth;
