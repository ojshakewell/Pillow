const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

const Post = require('./models/Post');

const PORT = 8080;
const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => res.send('Hello Backend World!'));

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/forum');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
