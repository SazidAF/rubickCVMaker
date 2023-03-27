import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';
import auth from './routes/auth.js';
import basicInfo from './routes/basicInfo';
import cv from './routes/cv';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/user', auth);
app.use('/basicinfo', basicInfo);
app.use('/cv', cv);
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log(`Server is running on port: localhost:${PORT}`)))
        .catch((error) => console.log(error.message));