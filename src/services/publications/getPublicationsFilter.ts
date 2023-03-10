import { selectPulicationsByStatus } from "../../dataAccess/publications/selectPulicationsByStatus";
import { selectUserById } from "../../dataAccess/user/selectUserById";
import { selectUsersByLikes } from "../../dataAccess/user/selectUsersByLikes";


//consigue las publicaciones ordenadas
//luego consigue el author y los usuarios de los likes
//un ORM hubiese quedado mejor aqui, pero como solo era esta parte no integre Sequelize
const getPublicationsFilter = async ({ status, user_id, sortBy }: { status: string[], user_id?: string, sortBy: string}) => {
    try {
        const posts = await selectPulicationsByStatus({ status, user_id, sortBy });
        await Promise.all(posts.map(async post => {
            post.author = await selectUserById({ userId: post.user_id.toString() });
        }));

        await Promise.all(posts.map(async post => {
            post.likes = await selectUsersByLikes({ postId: post.post_id.toString() });
        }))

        return posts;
    } catch (error) {
        console.error("Error en - getPublicationsFilter");
        throw error;
    }

}


export default getPublicationsFilter;