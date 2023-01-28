import { Router, Request, Response, NextFunction } from 'express'
import { deletePublication } from '../../dataAccess/publications/deletePublication';
import isAuth from '../../middlewares/auth/auth';
import { CreatePostScheme, UpdatePostScheme } from '../../schemes/postSchemes';
import createPubliction from '../../services/publications/createPublication';
import getPublicationsByUserId from '../../services/publications/getPublicationsByUserId';
import likePublication from '../../services/publications/likePublication';
import putPublication from '../../services/publications/putPublication';
import { InsertPost, Like, UpdatePost } from '../../types/Post';


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


    router.delete("/:id", isAuth, async (req: Request, res: Response, next: NextFunction) => {
        try {
            const postId = req.params.id;
            if (!req.user || !postId) {
                res.status(404).json({ error: "Error on request" });
                return;
            }

            await deletePublication({ post_id: postId, author: req.user?.user_id.toString() });

            res.status(200).json({ message: "The post was deleted!" });
        } catch (error) {
            next(error);
        }
    })



    router.put("/:id", isAuth, async (req: Request, res: Response, next: NextFunction) => {
        try {
            await UpdatePostScheme.validate(req.body);
            const postId = req.params.id;
            if (!req.user || !postId) {
                res.status(404).json({ error: "Error on request" });
                return;
            }
            const updatePost: UpdatePost = {
                message: req.body.message,
                status: req.body.status,
                author: req.user.user_id.toString(),
                post_id: postId
            }
            await putPublication(updatePost);

            res.status(200).json({ message: "The post was updated!" });
        } catch (error) {
            next(error);
        }
    })



    router.post("/like-publication/:postId", isAuth, async (req: Request, res: Response, next: NextFunction) => {
        try {
            const postId = req.params.postId;
            if (!req.user || !postId) {
                res.status(404).json({ error: "Error on request" });
                return;
            }
            const like: Like = {
                userId: req.user.user_id.toString(),
                postId: postId
            }
            await likePublication(like);

            res.status(200).json({ message: "The post was liked!" });
        } catch (error) {
            next(error);
        }
    })


    return router;
}




export default publicationsRouter;