import { Router, Request, Response, NextFunction } from 'express'
import { PassportStatic } from 'passport';
import { insertUser } from '../../dataAccess/user/insertUser';
import isAuth from '../../middlewares/auth/auth';
import { SignupRequestSchema } from '../../schemes/userSchemes';
import { UserRequest } from '../../types/User';

const router = Router();


const userRouter = (passport: PassportStatic) => {
    router.post('/register', async (req: Request, res: Response, next: NextFunction) => {

        try {
            const userRequest: UserRequest = req.body;
            await SignupRequestSchema.validate(userRequest);
            await insertUser(userRequest);
            res.status(200).json({ message: "The user has been registered" });
        } catch (error) {
            next(error);
        }

    })

    router.post('/auth/login', passport.authenticate('local', {}), (req: Request, res: Response) => {
        res.status(200).json({
            message: "ha iniciado sesion",
            user: req?.user?.username
        });
    })



    //test the auth
    router.get("/prueba", isAuth, (req: Request, res: Response) => {
        res.status(200).json({ message: 'Hola mundo' });
    })

    return router;
}




export default userRouter;