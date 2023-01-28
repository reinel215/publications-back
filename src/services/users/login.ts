import selectUserByUsername from "../../dataAccess/user/selectUserByUsername";
import { UserSerialize } from "../../types/User";

const login = async ({ username }: { username: string }) : Promise<UserSerialize> => {
    try {
        const user = await selectUserByUsername({ username });
        if (!user) {
            throw { status: 400, message: "Invalid username" };
        }
        return { username, id: user.user_id };

    } catch (error) {
        console.error("Error en - login");
        throw error;
    }

}

export default login;