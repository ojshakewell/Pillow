import React from 'react';

const ListItem = ({property, onPropertySelect}) => {
	return (
		<li onClick = {() => onPropertySelect(property)}>
			<div class="listitem">
				<div class="listitemdescription">
					<h2>Address</h2>
					<p>{property.address.steet}</p>
					<p>{property.address.city}, {property.address.state} {property.address.zipcode}</p>
					<h3>Zillow Estimate: ${property.zestimate.amount["#text"]}</h3>
					<h4>Region/Neighborhood: {property.localRealEstate.region["-name"]}</h4>
					<p>Additional Information: {property.links.homedetails}</p>
				</div>
				<div class="clear"></div>
			</div>
		</li>
	);
};

export default ListItem;