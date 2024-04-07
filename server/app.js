import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
const app=express()
mongoose.connect(process.env.MONGO_CDN_URL).then(()=>{
    app.listen(3000,()=>{
        console.log('connect to port 3000')
    })
}).catch(error=>{
    console.log(error)
    // console.log('error occured')
})

app.use(cors())
const musicTermDictionary = {
    "A cappella": "Singing without instrumental accompaniment.",
    "Accent": "Emphasis placed on a particular note or beats within a musical phrase.",
    // Add more terms and their meanings here
};
app.get('/musicTerm/:key', (req, res) => {
    const key = req.params.key;
    const meaning = musicTermDictionary[key];
    console.log(meaning)
    if (meaning) {
        
        res.json(meaning);
    } else {
        
        res.status(404).json({ error: 'Music term not found' });
    }
});
