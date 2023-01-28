import registerUser from '../../services/users/registerUser';
import login from '../../services/users/login';
import { Router, Request, Response, NextFunction } from 'express'

const router = Router();


router.post('/register', async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email, password, firstname, lastname } = req.body;

        if (!(email && password && firstname && lastname)) {
            next({ status: 400, message: "All the values are required" });
            return;
        }

        await registerUser({ email, password, firstname, lastname });
        res.status(200).json({ message: "The user has been registered" });

    } catch (error) {
        next(error);
    }

})



router.post('/login', async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            next({ status: 400, message: "All the values are requiered" });
            return;
        }

        await login({ email, password });

        res.status(200).json({ message: 'loggin success' });

    } catch (error) {
        next(error);
    }
});



router.get("/prueba", (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hola mundo' });
    return;
})



export default router;