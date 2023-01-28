import { Router, Request, Response, NextFunction } from 'express'
import isAuth from '../../middlewares/auth/auth';
import { CreatePostScheme } from '../../schemes/postSchemes';
import createPubliction from '../../services/publications/createPublication';
import getPublicationsByUserId from '../../services/publications/getPublicationsByUserId';
import { InsertPost } from '../../types/Post';


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



    router.post("/", isAuth, async (req: Request, res: Response, next: NextFunction) => {
        try {
            await CreatePostScheme.validate(req.body);
            const insertPublication: InsertPost = req.body;
            if (!req.user) {
                res.status(404).json({ error: "Error on request" });
                return;
            }
            insertPublication.author = req.user;
            await createPubliction(insertPublication);
            res.status(200).json({ message: "The post was created!" });
        } catch (error) {
            next(error);
        }
    })

    return router;
}




export default publicationsRouter;