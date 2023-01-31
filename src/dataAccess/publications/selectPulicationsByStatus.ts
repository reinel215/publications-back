import { query } from '../../lib/postgres/PostgreLib';
import { PostDb } from '../../types/Post';

const selectPublications = 'SELECT * FROM "post" WHERE "post".status = ANY ($1) ';
const authorFilter = ' AND "post".user_id=$2';
const ASC = ' ORDER BY "post".create_at ASC';
const DESC = ' ORDER BY "post".create_at DESC';


export const selectPulicationsByStatus = async ({ status, user_id, sortBy }: { status: string[], user_id?: string, sortBy: string }): Promise<PostDb[]> => {

    try {
        const typeOfSort = sortBy === "ASC" ? ASC : DESC; 
        const posts = await query(user_id ? selectPublications + authorFilter + typeOfSort : selectPublications + typeOfSort, user_id ? [status, user_id] : [status]);
        
        return posts;
    } catch (error) {
        console.error("Error en - selectUserById");
        throw error;
    }

}