import { CommentModel } from './models/Comments.js';
const count=10
export default async function handleComment(req, res, next) {
    // console.log(req.query.page);
    const page=req.query.page
    try {
        let username = req.body.userName || 'Anonymous'; // Setting a default username if not provided
        const comment = await CommentModel.create({
            Username: username,
            Comment: req.body.comment
        });
        res.status(201).json({message:'successfully added to database'})
        next();
    } catch (error) {
        console.error('Error handling comment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}