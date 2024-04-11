import { CommentModel } from './models/Comments.js';
const count=10
export default async function fetchComments(req,res,next){
    const page=req.query.page
    try {
        const comments=await CommentModel.find().skip(count*page).limit(count).sort({Date:-1})
        console.log(comments)
        res.status(200).json({
            message:'success',
            comment:comments
        })
        next();
    } catch (error) {
        
    }
}