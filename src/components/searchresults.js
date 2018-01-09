import React, { Component } from 'react';
import GoogleMap from './map';
import PropertyList from './list';

// need to figure out how to pass properties here 
// thought was properties={this.state.properties} on the <PropertyList /> component but it's throwing an error
// redux/flux
// more help needed

// callback function in Search.js to take whatever we get to the API call to the App.js page, then store it and pass it as props to the searchresults.js

class SearchResults extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="section-SearchResults">
				<div className="GoogleMap col span-3-of-5">
					<GoogleMap />
				</div>

				<div className="List col span-2-of-5">
					<PropertyList 
						properties={["123 fake street", "456 nope lane", "789 ilivehere true", "1 more"]}
					/>
				</div>
			</div>
		);
	}
}

export default SearchResults;