import express from 'express';
import { Inspection } from '../Models/inpection.js'

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (!req.body.hive || 
            !req.body.notes || 
            !req.body.queenBee ||
            ) {
            return res.status(400).send({
                message: 'Send all required fields: name, owner, location',
            });
        }

        const newInspection = {
            name: req.body.name,
            owner: req.body.owner,
            location: req.body.location,
        };

        const newInspectionInstance = await Hive.create(newInspection);

        return res.status(201).send(newInspectionInstance);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});