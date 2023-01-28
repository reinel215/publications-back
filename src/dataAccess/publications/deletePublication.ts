import { query } from '../../lib/postgres/PostgreLib';
import { Post, RemovePost } from '../../types/Post';

const deletePublicationQuery = 'DELETE FROM post WHERE user_id=$1 AND post_id=$2';

export const deletePublication = async ({ post_id, author } : RemovePost) : Promise<Post[]> => {
    try {
        const posts = await query(deletePublicationQuery, [author, post_id]);
        return posts;
    } catch (error) {
        console.error("Error en - deletePublication");
        throw error;
    }
}