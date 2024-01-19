import express from 'express';
import { Hive } from '../Models/hiveModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
    try {
        const hives = await Hive.find({});

        return res.status(200).json({
            count: hives.length,
            data: hives,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


//get a specific hive

router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const hive = await Hive.findById(id)

        return res.status(200).json(hive)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

});

// update a single hive

router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.owner ||
            !req.body.location
        ) {
            return res.send(400).send({
                message: 'Please return all of the following fields : name, owner, location.'
            });
        }

        const {id} =  req.params;
        const result = await Hive.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).json({message: 'Hive not found'})
        }

        return res.status(200).send({message: 'Your hive has been updated successfully'})
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// delete a hive

router.delete('/:id', async (req,res) =>{
    try{
        const {id} = req.params;
        const result = await Hive.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message: 'Hive not found'})
        }
        return res.status(200).send({message: 'Your hive has been deleted successfully'})
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

})

export default router;