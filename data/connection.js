'use strict'

import {createConnection, createPool} from "mysql2/promise";
import { config } from "dotenv";
config()

const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const connection = createPool(dbConfig)

try {
    await connection.getConnection();
    console.log('Successfully connected to the database');
    /*conn.release();*/
} catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', async () => {
    try {
        await connection.end();
        console.log('Database connection pool closed');
        process.exit(0);
    } catch (error) {
        console.error('Error closing database pool:', error);
        process.exit(1);
    }
});

export default connection;
