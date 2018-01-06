import React, { Component } from 'react';

// var axios = require("axios");
// var parseString = require("xml2js").parseString;

class Search extends Component {
	constructor(props) {
		super(props);
		
			this.state = {term: ""};


	}

	onInputChange (term) {
		this.setState({term});
		this.props.onSearchTermChange(this.state.term);

	}

	render(){
		return (
     
			<div className="Search col-md-12">
				<input 
					type="text" 
					placeholder="Search by Address" 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>

			</div>
		);
	}

}

export default Search;