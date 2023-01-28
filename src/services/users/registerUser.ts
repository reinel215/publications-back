import bcrypt from 'bcryptjs';

export const registerUser = async ({ email, password, firstname, lastname }: any) => {
    try {
        const hashPassword = await bcrypt.hash(password, 10);
    } catch (error) {
        console.error("Error en - registerUser");
        throw error;
    }

}


export default registerUser;