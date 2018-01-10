import React from 'react';
import SearchedProp from './searchedprop';
import PropertyList from './list';

const SearchResults = ({searchProperty, properties})  => {

	return (
		<div className = "section-SearchResults">
			<div className = "SearchedProp col span-3-of-5">
				<SearchedProp 
					searchProperty = {searchProperty}
				/>
			</div>

			<div className = "List col span-2-of-5">
				<PropertyList 
					properties = {properties}
					onPropertySelect = {selectedProperty => this.setState({ selectedProperty })}
				/>
			</div>
		</div>
	);
}

export default SearchResults;