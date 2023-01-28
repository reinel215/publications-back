import { insertLike } from "../../dataAccess/publications/insertLike";
import { Like } from "../../types/Post";

const likePublication = async (like: Like) => {
    try {
        return await insertLike(like);
    } catch (error) {
        console.error("Error en - likePublication");
        throw error;
    }

}


export default likePublication;