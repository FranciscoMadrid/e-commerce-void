import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

connection.connect(function (err) {
    console.log(process.env.DB_NAME);
    if(err){
        console.log(`Error connecting to the database. ${err}`);
        return;
    }
    console.log("Connection has been establish")
})