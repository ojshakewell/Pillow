import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Body from './components/body';
import SearchResults from './components/searchresults';
import MainProp from './components/mainprop';
import UserInfo from './components/userinfo';
import Footer from './components/footer';
import Login from './components/login';
let axios = require('axios');
let parseString = require('xml2js-es6-promise');

//zillow API key
let zwsId = 'X1-ZWz18uicz698gb_1d5w6';

//need to add to search integration in RunSearch function and dynamcially update.
//will require the search.js page to pass search value to RunSearch.
//To access the API, run yarn start to open backend, npm start to open front-end, then insert {this.runSearch()} into the page you are testing, or connect runSearch() to the search button.
let inputAddress = '4296 W 7th St, Long Beach, CA 90802'

let address = '1925+Quince+St';
let citystatezip = 'Denver%2C+CO';
let propId = ''
 
// parseAddress(inputAddress, function(err,addressObj){
// 	//replace spaces with a '+';
// 	var address = addressObj.street_address1.replace(/ /g, '+')
// 	var city = addressObj.city.replace(/ /g, '+')
// 	var citystatezip = city + '%2C+' + addressObj.state//%2C is a ','

//     console.log('Street: ', address)
//     console.log('City: ', city)
//     console.log('State: ', addressObj.state)
//     console.log('Zip: ', addressObj.postal_code)
//     console.log('Country: ', addressObj.country)
// 	let apiSearchUrl = '/webservice/GetDeepSearchResults.htm?zws-id=' + zwsId + '&address=' + address + '&citystatezip=' + citystatezip;
//     console.log(apiSearchUrl)
// });


class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			page: "user",
			searchProperty: {},
			properties: []
		}
	}

	runSearch (searchTerm) {
		let apiSearchUrl = '/webservice/GetDeepSearchResults.htm?zws-id=' + zwsId + '&address=' + address + '&citystatezip=' + citystatezip;
		// Make a request for a user with a given ID
		let searchProperty;
		let properties;

		axios.get(apiSearchUrl)
		.then((response) => {
		  return parseString(response.data);
		})
		.then((result) => {
			searchProperty = result;
		  return this.setState({searchProperty: result});
		})
		.then(() => {
			console.log(searchProperty);
			console.log(JSON.stringify(searchProperty,null,2));
			propId = this.state.searchProperty["SearchResults:searchresults"].response[0].results[0].result[0].zpid[0];
			let apiCompareUrl = '/webservice/GetComps.htm?zws-id=' + zwsId + '&zpid=' + propId + '&count=12';
			return axios.get(apiCompareUrl);
		})
		.then((response) => {
			return parseString(response.data);
		})
		.then((result) => {
			properties = result;
			return this.setState({
				properties: result,
				selectedProperty: ''
			  },

			);
		})
		.then(() => {
			console.log(properties);
		})
		.catch(function (error) {
		  console.log(error);
		});
	}

	render() {

		const runSearchThrottle = _.debounce((term) => {this.runSearch(term)}, 700);

		return (
			<div className="App">
				{this.state.page === "search" &&
					<Fragment>
						<div className="header2">
							<Header />
						</div>
						<SearchResults 
							searchProperty = {this.state.searchProperty}
							properties = {this.state.properties}
						/>
						<Footer />
						<div className="clear"></div>
					</Fragment>
				}
				{this.state.page === "property" &&
					<Fragment>
						<div className="header2">
							<Header />
						</div>
						<MainProp />
						<Footer />
						<div className="clear"></div>
						</Fragment>
				}
				{this.state.page === "user" &&
					<Fragment>
						<div className="header2">
							<Header />
						</div>
						<UserInfo />
						<Footer />
						<div className="clear"></div>
					</Fragment>
				}
				{this.state.page === "home" &&
					<Fragment>
						<div className="header">
							<Header />
							<div className="clear"></div>
							<Hero 
								onSearchTermChange = {this.runSearch()}
							/>
						</div>
						<Body />
						<Footer />
						<div className="clear"></div>
					</Fragment>
				}
			</div>
		);
	}
}

export default App;