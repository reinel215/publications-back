import { Client } from 'pg';
import { config } from '../../config/config';

/** Lib custom para la conexion a la base de datos */

let client : Client;

//se puede conectar por connection string o por parametros separados
if (config.dbURL) {
    client = new Client({
        connectionString: config.dbURL
    })
} else {
    client = new Client({
        user: config.dbUser,
        host: config.dbHost,
        database: config.dbName,
        password: config.dbPassword,
        port: Number(config.dbPort) || 5432
    })
}


//query generico para reutilizar
export const query = async (query: string, values : (Object | null)[] = []) => {

    try {
        const result = await client.query(query, values);
        return result.rows;

    } catch (error) {
        console.error("******ERROR DURANTE EL QUERY");
        throw error;
    }


}

if (process.env.NODE_ENV !== 'test') { // In test we are going to connect manually
    client.connect();
}


//give the control of the connection to the upper layers
export const disconnect = () => {
    client.end();
}


export const connect = () => {
    client.connect();
}