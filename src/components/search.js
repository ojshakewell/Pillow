import React, { Component } from 'react';
var parseAddress = require('parse-address-string');


let zwsId = 'X1-ZWz18uicz698gb_1d5w6';
let inputAddress = '15856 E Oxford Ave, Aurora, CO';
//inputAddress = '4296 W 7th St, Long Beach, CA 90802'

var address;
var city;
var citystatezip;

//Things to do:
//Parse the input field into [address] and [city/state]
parseAddress(inputAddress, function(err,addressObj){
	//replace spaces with a '+';
	address = addressObj.street_address1.replace(/ /g, '+');
	city = addressObj.city.replace(/ /g, '+');
	citystatezip = city + '%2C+' + addressObj.state;//%2C is a ','

    console.log('Street: ', address);
    console.log('City: ', city);
    console.log('State: ', addressObj.state);
    console.log('Zip: ', addressObj.postal_code);
    console.log('Country: ', addressObj.country);
	let apiSearchUrl = '/webservice/GetDeepSearchResults.htm?zws-id=' + zwsId + '&address=' + address + '&citystatezip=' + citystatezip;
    console.log(apiSearchUrl);
});

//Handle onInputChange/onSearchTermChange to do the follow:
//Send address from input field into the zillow API
//When "Search Now" is clicked the user needs to move to the search results page (this.state.page = "search")

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		};
	}

	onInputChange (searchTerm) {
		this.setState({searchTerm});
		this.props.onSearchTermChange(this.state.searchTerm);
	}

	render(){
		return (
			<div className="Search col-md-12">
				<input 
					className="search-field" 
					type="text" 
					placeholder="Enter an address to compare properties"
					value={this.state.searchTerm}
					onChange={event => this.onInputChange(event.target.value)}
				/>
				<a className="btn btn-full" href="#">Search Now</a>
			</div>
		);
	}

}

export default Search;