import { Client } from "pg";

export const client = new Client({
    host: 'localhost',
    user: 'cleverson',
    password: '1234',
    database: 'academicnews',
    port: 5432
})

client.connect()