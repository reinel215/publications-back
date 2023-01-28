import { query } from '../../lib/postgres/PostgreLib';
import { Post } from '../../types/Post';

const selectPublicationsByAuthor = 'SELECT * FROM "post" WHERE "post".user_id=$1';

export const selectPulicationsByAuthor = async ({ userId }: { userId: string }) : Promise<Post[]> => {

    try {
        console.log("the user id is : ", userId);
        
        const posts = await query(selectPublicationsByAuthor, [userId]);
        return posts;
    } catch (error) {
        console.error("Error en - selectUserById");
        throw error;
    }

}