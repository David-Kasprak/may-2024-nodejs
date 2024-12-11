const express = require('express');
const dotenv = require('dotenv')
const {read, write} = require('./fs.service');
dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Reading users
app.get('/users', async (req, res) => {
    try {
        const users = await read();
        res.json(users);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
});
// Creating new user
app.post('/users', async (req, res) => {
    try {
        const users = await read();
        const newUser = {
        id: users.length ? users [users.length - 1].id + 1 : 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        }
        users.push(newUser);
        await write(users);
        res.status(201).json(newUser);
        }
    catch (e) {
        res.status(500).json(e.message);
        }
});
// Reading user by id
app.get('/users/:userId', async (req, res) => {
    try {
        const users = await read();
        const user = users.find(user => user.id === Number(req.params.userId));
        res.json(user);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
});
// Deleting user by id
app.delete('/users/:userId', async (req, res) => {
    try {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(req.params.userId));
        if (index === -1) {
            return res.status(404).json('User not found')
        }
        users.splice(index, 1);
        await write(users);
        res.sendStatus(204);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});