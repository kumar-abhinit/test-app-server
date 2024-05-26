import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 12345,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    // logging: true,
    synchronize: true,
})