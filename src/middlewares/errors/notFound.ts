import { Request, Response, NextFunction } from 'express';


//midleware in case of get a request to a route that doesnt exists
export const notFound = (req: Request, res: Response, next: NextFunction) => {
    const err = new Error("page not found")
    next(err);
}