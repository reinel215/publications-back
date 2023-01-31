import { query } from '../../lib/postgres/PostgreLib';
import { Like, Post } from '../../types/Post';

const deleteLikeQuery = 'DELETE FROM "like" WHERE user_id=$1 AND post_id=$2';

export const deleteLike = async ({ postId, userId } : Like) : Promise<Post[]> => {
    try {
        const posts = await query(deleteLikeQuery, [userId, postId]);
        return posts;
    } catch (error) {
        console.error("Error en - deleteLike");
        throw error;
    }
}