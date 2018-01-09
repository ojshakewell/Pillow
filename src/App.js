import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Body from './components/body';
import SearchResults from './components/searchresults';
import MainProp from './components/mainprop';
import UserInfo from './components/userinfo';
import Footer from './components/footer';
let axios = require('axios');
let parseString = require('xml2js-es6-promise');

//zillow API key
let zwsId = 'X1-ZWz18uicz698gb_1d5w6';

//need to add to search integration in RunSearch function and dynamcially update
let address = '1925+Quince+St';
let citystatezip = 'Denver%2C+CO';
let propId = ''

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			page: "home",
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
			return this.setState({properties: result});
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
						<SearchResults />
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
								onSearchTermChange={runSearchThrottle}
							/>
						</div>
						<Body />
						<Footer />
						<div className="clear"></div>
						{this.runSearch()}
					</Fragment>
				}
			</div>
		);
	}
}

export default App;