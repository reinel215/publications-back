import { Router, Request, Response, NextFunction } from 'express'
import isAuth from '../../middlewares/auth/auth';
import getPublicationsByUserId from '../../services/publications/getPublicationsByUserId';


const router = Router();


const publicationsRouter = () => {

    router.get("/", isAuth, async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.user_id.toString() || "";
            const publications = await getPublicationsByUserId({ userId });
            console.log(publications)
            res.status(200).json(publications);
        } catch (error) {
            next(error);
        }
    })

    return router;
}




export default publicationsRouter;