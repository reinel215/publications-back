import { selectUserById } from "../../dataAccess/user/selectUserById";

const getUser = async ({ userId }: { userId: string}) => {
    try {
        return await selectUserById({ userId });
    } catch (error) {
        console.error("Error en - getUser");
        throw error;
    }

}


export default getUser;