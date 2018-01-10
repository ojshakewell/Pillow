import React, { Component } from 'react';

//Things to do:
//Parse the input field into [address] and [city/state]

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