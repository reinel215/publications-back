import { query } from '../../lib/postgres/PostgreLib'
import { UserRequest } from '../../types/User';

const registerUserQuery = 'INSERT INTO "user"( avatar, surname, name, username, role) VALUES ($1,$2,$3,$4, $5) RETURNING *';


export const insertUser = async ({ avatar, surname, name, username, role }: UserRequest) => {

    try {
        return (await query(registerUserQuery, [avatar || null, surname, name, username, role]))[0];
    } catch (error) {
        console.error("Error en - insertUser");
        throw error;
    }

}
