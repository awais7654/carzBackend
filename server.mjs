import 'dotenv/config';
import express from "express";
import cors from 'cors';
import v1Routes from './v1Routes/index.mjs'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', v1Routes)

app.get('/', async (req, res, next) => {
    res.status(200).send({"message": "Hello Welcome to AWAIS Cloud"});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})