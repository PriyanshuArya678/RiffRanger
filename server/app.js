import express from 'express';
import cors from 'cors';
import { connectDb } from './connectDb.js';
import { login } from './login.js';
import { register } from './register.js';
const app = express();
app.use(cors());
app.use(express.json());

app.post('/SignUp', register, (req, res) => {});
app.post('/Login', login, (req, res) => {});

const musicTermDictionary = {
    "A cappella": "Singing without instrumental accompaniment.",
    "Accent": "Emphasis placed on a particular note or beats within a musical phrase.",
    // Add more terms and their meanings here
};

app.get('/musicTerm/:key', (req, res) => {
    const key = req.params.key;
    const meaning = musicTermDictionary[key];
    console.log(meaning);
    if (meaning) {
        res.json(meaning);
    } else {
        res.status(404).json({ error: 'Music term not found' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    connectDb();
    console.log('Connected to port 3000');
});
