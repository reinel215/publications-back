import PassportLocal from 'passport-local';
import login from '../../services/users/login';

export const strategy = new PassportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password'
},
    async (username: string, password: string, done: any) => {


        try {

            const user = await login({ username });
            done(null, user);

        } catch (error: any) {
            if (error.message == 'usuario invalido')
                done(null, false, { message: error.message });
            else
                done(error);
        }
    }
)

