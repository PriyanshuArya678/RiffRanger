import DetailsModel from './models/Details.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
export async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const userDetails = await DetailsModel.find({ email: email, password: password });
        if(userDetails.length >0){
            console.log('logged in')
            const token=await jwt.sign({userId:userDetails._id},process.env.SECRET_KEY)
            res.cookie("jwt",token,{
                httpOnly:false,
                sameSite: 'lax', 
                domain:'localhost',
                path:'/'
            })
            res.status(200).json({success:true,message:'successfully logged in',name:userDetails[0].name})
        }
        else {
            console.log('not registered')
            res.status(200).json({success:false,message:'incorrect email or password'})
        }
    } catch (error) {
        console.log(error);
    }
    next()
}