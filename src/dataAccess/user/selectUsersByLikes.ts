import { query } from '../../lib/postgres/PostgreLib';
import { User } from '../../types/User';


const selectUsersByLikesQuery = `SELECT "user".* FROM "user"
JOIN "like" ON "like".user_id = "user".user_id
WHERE "like".post_id = $1`;

export const selectUsersByLikes = async ({ postId }: { postId: string }) : Promise<User[]> => {

    try {
        const users = await query(selectUsersByLikesQuery, [postId]);
        return users;
    } catch (error) {
        console.error("Error en - selectUsersByLikes");
        throw error;
    }

}