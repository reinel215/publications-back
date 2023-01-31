import { insertPublication } from "../../dataAccess/publications/insertPublication";
import { InsertPost } from "../../types/Post";

const createPubliction = async (post: InsertPost) => {
    try {
        return await insertPublication(post);
    } catch (error) {
        console.error("Error en - createPubliction");
        throw error;
    }

}


export default createPubliction;