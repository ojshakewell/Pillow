let axios = require('axios');
let parseString = require('xml2js').parseString;
//var xml = require('./test.xml');

//zillow API key
let zwsId = 'X1-ZWz18uicz698gb_1d5w6';
let address = '1925+Quince+St';
let cityStateZip = 'Denver%2C+CO';

let apiUrl = 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=' + zwsId + '&address=' + address + '&citystatezip=' + cityStateZip;


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

