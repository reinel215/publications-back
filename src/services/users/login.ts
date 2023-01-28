import bcrypt from 'bcryptjs';


const login = async ({ email, password } : any) => {
    try {
        // const user = await selectUserByEmail({ email });
        // if (!user) {
        //     throw { status: 400, message: "Invalid email" };
        // }

        // //compare the two passwords
        // const passwordMatch = await bcrypt.compare(password, user.password);
        // if (!passwordMatch) {
        //     throw { status: 400, message: "Invalid password" };
        // }


        // const payload = { email, id: user.user_id };


    } catch (error) {
        console.error("Error en - login");
        throw error;
    }

}

export default login;