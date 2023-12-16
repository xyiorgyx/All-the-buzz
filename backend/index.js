import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import { Hive } from './Models/hiveModel.js'

const app = express();
app.use(express.json())

app.get('/', (req,res) => {
    console.log(req)
    return res.status(234).send('welcome')
})

app.post('/hives', async (req, res) => {
    try {
        if (!req.body.name || !req.body.owner || !req.body.location) {
            return res.status(400).send({
                message: 'Send all required fields: name, owner, location',
            });
        }

        const newHive = {
            name: req.body.name,
            owner: req.body.owner,
            location: req.body.location,
        };

        const newHiveInstance = await Hive.create(newHive);

        return res.status(201).send(newHiveInstance);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

mongoose
.connect(mongoDBURL)
.then(() => {
console.log('App is now connected to database')
app.listen(PORT, () => {
    console.log (`App is listening to port: ${PORT}`);
});

})
.catch((error) => {
console.log(error)
})