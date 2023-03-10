import { Router, Request, Response, NextFunction } from 'express'
import { PassportStatic } from 'passport';
import isAuth from '../../middlewares/auth/auth';
import { SignupRequestSchema } from '../../schemes/userSchemes';
import getUser from '../../services/users/getUser';
import registerUser from '../../services/users/registerUser';
import { UserRequest } from '../../types/User';

const router = Router();


const userRouter = (passport: PassportStatic) => {
    router.post('/register', async (req: Request, res: Response, next: NextFunction) => {

        try {
            const userRequest: UserRequest = req.body;
            await SignupRequestSchema.validate(userRequest);
            await registerUser(userRequest);
            res.status(200).json({ message: "The user has been registered" });
        } catch (error) {
            next(error);
        }

    })

    router.post('/auth/login', passport.authenticate('local', {}), (req: Request, res: Response) => {
        res.status(200).json({
            message: "ha iniciado sesion",
            user: req?.user
        });
    })


    router.get("/:userId", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.userId;
            if (!userId) {
                res.status(404).json({ error: "Error on request" });
                return;
            }

            const user = await getUser({ userId: userId });

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    })



    //test the auth
    router.get("/prueba", isAuth, (req: Request, res: Response) => {
        res.status(200).json({ message: 'Hola mundo' });
    })

    return router;
}




export default userRouter;