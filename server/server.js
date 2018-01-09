const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const parseString = require('xml2js').parseString;
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

app.get('/webservice/GetComps.htm', (req, res) => {
	let apiCompareUrl = 'http://www.zillow.com/webservice/GetComps.htm?zws-id=' + req.query["zws-id"] + '&zpid=' + req.query["zpid"] + '&count=12';
	// Make a request for a user with a given ID
	axios.get(apiCompareUrl)
	  .then(function (response) {
	      res.send(response.data);
	  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/webservice/GetDeepSearchResults.htm', (req, res) => {
	let apiSearchUrl = 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=' + req.query["zws-id"] + '&address=' + req.query.address + '&citystatezip=' + req.query.citystatezip;
	// Make a request for a user with a given address
	axios.get(apiSearchUrl)
	  .then(function (response) {
	      res.send(response.data);
	  })
  .catch(function (error) {
    console.log(error);
  });
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));