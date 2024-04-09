import express from 'express'
const app=express()
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
export async function auth(req,res,next){
    const token=req.body.Headers.Authorization.slice(7)
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,(err,decodedToken)=>{
            if(err)res.status(403).json({message:'wrong token'})
            if(decodedToken.userId)res.status(200).json({message:'give access'})
        })
    }else res.status(401).json({message:'could not receive token,try again or login again'})
    next()
}