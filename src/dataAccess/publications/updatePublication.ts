import { query } from '../../lib/postgres/PostgreLib';
import { UpdatePost } from '../../types/Post';

const updatePublicationQuery = 'UPDATE post SET message=$1, status=$2 WHERE user_id=$3 AND post_id=$4';

export const updatePublication = async ({ message, status, author, post_id} : UpdatePost) : Promise<void> => {
    try {
        await query(updatePublicationQuery, [message, status, author, post_id]);
    } catch (error) {
        console.error("Error en - updatePublication");
        throw error;
    }
}