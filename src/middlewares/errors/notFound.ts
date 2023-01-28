import { Request, Response, NextFunction } from 'express';



export const notFound = (req: Request, res: Response, next: NextFunction) => {
    const err = new Error("page not found")
    next(err);
}