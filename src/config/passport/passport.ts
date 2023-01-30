import { PassportStatic } from 'passport';
import { selectUserById } from '../../dataAccess/user/selectUserById';
import { User } from '../../types/User';
import { strategy } from './local';

//este archivo va a configurar passport; el serialize, el deserialize y la estrategia
export const configPassport = (passport : PassportStatic) =>{
    
    passport.serializeUser(function(user : any, done) {
        done(null, user);
    });
      
    passport.deserializeUser(async function(userSerialize : User, done) {
        const user = await selectUserById({userId: userSerialize.user_id.toString()});
        done(null, user);
    });


    passport.use(strategy);
}