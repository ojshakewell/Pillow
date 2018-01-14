import React from 'react';

// Need to replace fake information with property parameters... Not sure what these are stored as in their current form.

const SearchedProp = ({searchProperty, onPropertySelect}) => {
	console.log(searchProperty)
	return (
			<div className="listitem" onClick = {() => onPropertySelect(searchProperty)}>
				<div className="listitemdescription">
					<h3>Address</h3>
					<p className="address">4296 W 7th St</p>
					<p className="address">Long Beach, CA 90802</p>
					<h4>Zillow Estimate: </h4> <span> $319,800</span><br />
					<h4>Region/Neighborhood: </h4>
					<span> Long Beach</span><br />
					<h4>Additional Information:</h4>
					<p>
Status
Active
Price/Sq Ft
$382
On realtor.com®
10 hours
Type
Condo/townhome/row home/co-op
Built
1984
MOTIVATED SELLER! Owner WILL PAY for first six months of HOA dues with a full price offer! A Must See, Completely Remodeled as of Nov. 201, modern, luxury Condo in Downtown Long Beach. </p>
				</div>
				<div className="clear"></div>
			</div>
	);
};

export default SearchedProp;