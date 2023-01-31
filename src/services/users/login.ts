import selectUserByUsername from "../../dataAccess/user/selectUserByUsername";
import { User, UserSerialize } from "../../types/User";

//get the user to return it to the front if not exists return an error
const login = async ({ username }: { username: string }) : Promise<User> => {
    try {
        const user = await selectUserByUsername({ username });
        if (!user) {
            throw { status: 400, message: "Invalid username" };
        }
        return user;

    } catch (error) {
        console.error("Error en - login");
        throw error;
    }

}

export default login;