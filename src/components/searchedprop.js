import React from 'react';

// Need to replace fake information with property parameters... Not sure what these are stored as in their current form.

const SearchedProp = ({searchProperty, onPropertySelect}) => {
	console.log(searchProperty)
	return (
			<div className="listitem" onClick = {() => onPropertySelect(searchProperty)}>
				<div className="listitemdescription">
					<h3>Address</h3>
					<p className="address">123 Fake Address</p>
					<p className="address">Highlands Ranch, Colorado 80126</p>
					<h4>Zillow Estimate: </h4> <span> $123564</span><br />
					<h4>Region/Neighborhood: </h4>
					<span> Castle Pines</span><br />
					<h4>Additional Information:</h4>
					<p>Additional House Details go here. If I keep writing we should see that the max width of the box doesn't exceed 50% of the screen.</p>
				</div>
				<div className="clear"></div>
			</div>
	);
};

export default SearchedProp;