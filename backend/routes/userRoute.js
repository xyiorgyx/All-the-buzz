import express from'express';
import { User } from '../Models/userModel.js';

const router= express.Router();

router.post('', async (req, res) => {
    try {
        if (!req.body.username || !req.body.password || !req.body.email) {
            return res.status(400).send({
                message: 'Send all required fields: username, password, email',
            });
        }

        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };

        const newUserInstance = await User.create(newUser);

        return res.status(201).send(newUserInstance);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('', async (req, res) => {
    try {
        const users = await User.find({})

        return res.status(200).json({
            count: users.length,
            data: users,
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }

});
export default router