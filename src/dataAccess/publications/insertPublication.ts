import { query } from '../../lib/postgres/PostgreLib';
import { InsertPost, Post } from '../../types/Post';

const insertPublicationQuery = 'INSERT INTO post(message, user_id, location, status, image) VALUES ($1, $2, $3, $4, $5)';

export const insertPublication = async ({ image, message, author, location, status } : InsertPost) : Promise<Post[]> => {

    try {
        const posts = await query(insertPublicationQuery, [message, author.user_id, location, status, image || null]);
        return posts;
    } catch (error) {
        console.error("Error en - selectUserById");
        throw error;
    }

}