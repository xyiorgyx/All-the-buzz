import express from 'express';
import { User } from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'SECRETKEY'

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        if (!req.body.username || !req.body.password || !req.body.email) {
            return res.status(400).send({
                message: 'Send all required fields: username, password, email',
            });
        }

        const { username, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = { username, email, password: hashedPassword };
        const newUser = await User.create(userData);

        return res.status(201).send(newUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// get login

router.post('/login', async (req, res) => {
    try{
        const {username, password} =  req.body;
        const user = await User.findOne({username})
        if (!user){
            return res.status(401).send({error: 'Invalid Credentials'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(401).send({error: 'Invalid Credentials'})
        }
        const token = jwt.sign({ userId : user._id}, SECRET_KEY, {expiresIn: '1hr'})
        res.send({message: 'Login Successful'})
    } catch(err){
        res.status(500).send({error:"An error has occured"})
    }
})
export default router;
