import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
// Instead of this:
// import Details from 'C:\Users\Asus\Desktop\guitarApp1\RiffRanger\server\models\Details';
// Use this:

import DetailsModel from './models/Details.js';

const app = express()
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Register")
app.post('/details',(req,res)=>{
    DetailsModel.create(req,body)
    .then(details => res.json(details))
    .catch(err => res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running")
})