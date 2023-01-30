import { query } from '../../lib/postgres/PostgreLib';
import { UpdatePost } from '../../types/Post';

const updatePublicationQuery = 'UPDATE post SET message=$1, status=$2 WHERE post_id=$3 ';
const authorFilter = ' AND user_id=$4'


export const updatePublication = async ({ message, status, author, post_id} : UpdatePost, isAdmin? : boolean) : Promise<void> => {
    try {
        await query( isAdmin ? updatePublicationQuery : updatePublicationQuery + authorFilter, isAdmin ? [message, status, post_id] : [message, status, post_id, author ]);
    } catch (error) {
        console.error("Error en - updatePublication");
        throw error;
    }
}