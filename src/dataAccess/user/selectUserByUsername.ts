import { query } from '../../lib/postgres/PostgreLib';
import { User } from '../../types/User';

const getUserQuery = 'SELECT * FROM "user" WHERE "user".username=$1';

const selectUserByUsername = async ({ username }: { username: string }) : Promise<User> => {

    try {
        const user = await query(getUserQuery, [username]);
        return user[0];
    } catch (error) {
        console.error("Error en - selectUserByUsername");
        throw error;
    }

}



export default selectUserByUsername;