import { NextFunction, Request, Response } from 'express';


const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated())
        next();
    else
        next({ status: 401, message: "Your not authorized!!" });
}


export default isAuth;
