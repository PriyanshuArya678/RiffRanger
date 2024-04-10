import express from 'express'
const app=express()
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import DetailsModel from './models/Details.js';
dotenv.config();

export async function auth (req,res,next){
    const token=req.body.Headers.Authorization.slice(7)
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,async(err,decodedToken)=>{
            if(err)res.status(403).json({message:'wrong token'})
            if(decodedToken.userId){
                const user = await DetailsModel.find({_id:decodedToken.userId})
                console.log(user)
                res.status(200).json({message:'give access',userName:user[0].name,userEmail:user[0].email})
            }
        })
    }else res.status(401).json({message:'could not receive token,try again or login again'})
    next()
}