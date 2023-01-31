import { insertUser } from "../../dataAccess/user/insertUser";
import { UserRequest } from "../../types/User";

export const registerUser = async (userRequest: UserRequest) => {
    try {
        await insertUser(userRequest);
    } catch (error) {
        console.error("Error en - registerUser");
        throw error;
    }

}


export default registerUser;