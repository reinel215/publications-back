import { insertPublication } from "../../dataAccess/publications/insertPublication";
import { InsertPost } from "../../types/Post";

const createPubliction = async (post: InsertPost) => {
    try {
        return await insertPublication(post);
    } catch (error) {
        console.error("Error en - registerUser");
        throw error;
    }

}


export default createPubliction;