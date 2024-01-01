import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import hiveroutes from './routes/hiveRoute.js'
import cors from 'cors'


const app = express();
app.use(express.json())

app.use(cors());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('welcome')
})

app.use('/hives', hiveroutes)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is now connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error)
    })