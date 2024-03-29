import express from 'express'
import cors from 'cors';
const app=express()
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

// Start the server
const PORT =3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});