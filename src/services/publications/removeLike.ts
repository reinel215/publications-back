import { deleteLike } from "../../dataAccess/publications/deleteLike";
import { Like } from "../../types/Post";

const removeLike = async (like : Like) => {
    try {
        return await deleteLike(like);
    } catch (error) {
        console.error("Error en - removeLike");
        throw error;
    }

}


export default removeLike;