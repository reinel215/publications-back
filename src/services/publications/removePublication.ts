import { deletePublication } from "../../dataAccess/publications/deletePublication";
import { RemovePost } from "../../types/Post";

const removePublication = async (remove : RemovePost) => {
    try {
        return await deletePublication(remove);
    } catch (error) {
        console.error("Error en - removePublication");
        throw error;
    }

}


export default removePublication;