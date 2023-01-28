require('dotenv').config();



export const config = {
    dbURL: process.env.DATABASE_URL,
    dev: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
}
