import { updatePublication } from "../../dataAccess/publications/updatePublication";
import { UpdatePost } from "../../types/Post";

const putPublication = async (updatePost : UpdatePost) => {
    try {
        return await updatePublication(updatePost);
    } catch (error) {
        console.error("Error en - putPublication");
        throw error;
    }

}


export default putPublication;