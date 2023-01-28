import { query } from '../../lib/postgres/PostgreLib';

const getUserByIdQuery = 'SELECT * FROM "user" WHERE "user".user_id=$1';

export const selectUserById = async ({ userId }: { userId: string }) => {

    try {
        const user = await query(getUserByIdQuery, [userId]);
        return user[0];
    } catch (error) {
        console.error("Error en - selectUserById");
        throw error;
    }

}