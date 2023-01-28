const { query } = require('../../lib/postgres/PostgreLib');

const getUserQuery = 'SELECT * FROM "user"';

const selectAllUsers = async () => {

    try {
        const user = await query(getUserQuery);
        return user;
    } catch (error) {
        console.error("Error en - selectAllUsers");
        throw error;
    }

}



module.exports = selectAllUsers ;