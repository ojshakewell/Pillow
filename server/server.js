const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
// const mongodb = require('mongodb');

const db = require('./models');

const PORT = 8080;
const app = express();

app.use(bodyParser.json());

// app.get('/api', (req, res) => res.send('Hello Backend World!'));

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/pillowApp');

var user = {};

user.username = 'fred';
user.password = 'password';

console.log(user);


app.get('/api', (req, res) => {
db.User
.create(user)
.then(function(dbUser) {
   res.send("User added");
}).catch(function(err) {
   res.json(err);
});
// db.find({}).then((dbUser) => {
// res.send(dbUser);

// })
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));