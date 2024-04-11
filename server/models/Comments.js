import mongoose from "mongoose";

const RepliesSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Comment: {
        type: String,
        required: true
    },
});

const CommentSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Comment: {
        type: String,
        required: true
    },
    subComment: [RepliesSchema]
});

export const CommentModel = mongoose.model('Comment', CommentSchema);
export const RepliesModel = mongoose.model('Replies', RepliesSchema);

