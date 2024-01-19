import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import hiveRoutes from './routes/hiveRoute.js'
import userRoutes from './routes/userRoute.js'
import cors from 'cors'

import bodyParser from "body-parser";

const app = express();
app.use(express.json())

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('welcome')
})

app.use('/users', userRoutes)
app.use('/hives', hiveRoutes)


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