import React, { Component } from 'react';

// var axios = require("axios");
// var parseString = require("xml2js").parseString;

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ""};
	}

	onInputChange(term){
		this.setState({term: term})
		this.props.onSearchTermChange(this.state.term)
	}

	render() {
		return (
			<div className="Search">
				<input
					type='text'
					placeholder='search by address'
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
				<p>SEARCH HERE</p>
			</div>
		);
	}
}

export default Search;