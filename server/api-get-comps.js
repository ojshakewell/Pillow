let axios = require('axios');
let parseString = require('xml2js').parseString;
//var xml = require('./test.xml');

//zillow API key
let zwsId = 'X1-ZWz18uicz698gb_1d5w6';
let propId = '13289515'
let propCount = 5

let apiUrl = 'http://www.zillow.com/webservice/GetComps.htm?zws-id=' + zwsId + '&zpid=' + propId + '&count=' + propCount; 
//http://www.zillow.com/webservice/GetComps.htm?zws-id=<ZWSID>&zpid=48749425&count=5
//let apiUrl = 'http://www.zillow.com/webservice/GetComps.htm?zws-id=' + zwsId + '&city=' + propId;


// Make a request for a user with a given ID
axios.get(apiUrl)
  .then(function (response) {
    console.log('axios XML response: ', response.data)
    console.log('typeof axios response:', typeof response.data);

    //console.log(xml);
    parseString(response.data, function (err, result) {
      console.log('JSONresult: ', JSON.stringify(result));
      console.log('typeof JSONresult: ', typeof result)
    });

  })
  .catch(function (error) {
    console.log(error);
  });

