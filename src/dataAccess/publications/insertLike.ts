import { query } from '../../lib/postgres/PostgreLib';
import { Like } from '../../types/Post';

const insertLikeQuery = 'INSERT INTO "like"(user_id, post_id) VALUES ($1, $2)';

export const insertLike = async ({ userId, postId }: Like): Promise<Like[]> => {

    try {
        const like = await query(insertLikeQuery, [userId, postId]);
        return like;
    } catch (error) {
        console.error("Error en - insertLike");
        throw error;
    }

}