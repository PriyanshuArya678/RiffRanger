import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

export async function connectDb() {
    await mongoose.connect(process.env.MONGO_CDN_URL)
        .then(() => {
            console.log('connected to database');
        })
        .catch(error => {
            console.log(error);
        });
}
