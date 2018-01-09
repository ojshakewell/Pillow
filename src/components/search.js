import React, { Component } from 'react';

// var axios = require("axios");
// var parseString = require("xml2js").parseString;

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			properties: []
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
				placeholder="Enter an address, city, or zipcode"
				value={this.state.searchTerm}
				onChange={event => this.onInputChange(event.target.value)}
				/>
				<a className="btn btn-full" href="#">Search Now</a>
			</div>
		);
	}

}

export default Search;