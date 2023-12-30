import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dbConnection from './config/db.js';

const app = express();
dotenv.config();

dbConnection();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT , (err) => {
    if(err) throw err;
    console.log(`Server running on port ${PORT}`);
})