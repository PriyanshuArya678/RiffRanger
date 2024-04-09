import DetailsModel from './models/Details.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
export async function register(req, res, next) {
    const { name, email, password } = req.body;
    
    try {
        const details = await DetailsModel.create({
            name:name,
            email: email,
            password: password
        });
        
        const token=await jwt.sign({userId:details._id},process.env.SECRET_KEY)
        try {
            res.cookie("jwt",token,{
                httpOnly:false,
                sameSite: 'lax', 
                domain:'localhost',
                path:'/'
            })
        } catch (error) {
            console.log(error)
        }
        
        res.status(201).json({message:'user successfully created',email:email,name:name})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Could not Register,try again"})
    }
    next()
}
