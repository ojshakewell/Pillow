const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const Post = require('./models/Post');

const PORT = 8080;
const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => res.send('Hello World!'));

mongoose.connect('mongodb://localhost/forum');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));