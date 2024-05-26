import 'reflect-metadata';
import { app } from "./app";
import connectdb from "./config/db";
import { config } from 'dotenv';

config();

connectdb();

app.listen(8000, 'localhost', () => {
    console.log("Server is up and running at 8000");
});
