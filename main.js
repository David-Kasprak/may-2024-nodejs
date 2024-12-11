const express = require('express');
const dotenv = require('dotenv')
const {read, write} = require('./fs.service');
dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Reading users
app.get('/users', (req, res) => {
    res.json(users);
});
// Creating new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    users.push(newUser)
    res.status(201).json(newUser);
});
// Reading user by id todo
app.get()

// Deleting user by id

const port = process.env.PORT;