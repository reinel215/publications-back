import { selectPulicationsByAuthor } from "../../dataAccess/publications/selectPublicationsByAuthor";

const getPublicationsByUserId = async ({ userId }: { userId: string }) => {
    try {
        return await selectPulicationsByAuthor({ userId });
    } catch (error) {
        console.error("Error en - registerUser");
        throw error;
    }

}


export default getPublicationsByUserId;