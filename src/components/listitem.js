import React from 'react';

// example formatting:
//<li>
//	<div class="listitem">
//		<div class="listitemdescription">
//			<h3>Address</h3>
//			<p className="address">123 Fake Address</p>
//			<p className="address">Highlands Ranch, Colorado 80126</p>
//			<h4>Zillow Estimate: </h4> 
//			<span> $123564</span><br />
//			<h4>Region/Neighborhood: </h4>
//			<span> Castle Pines</span><br />
//			<h4>Additional Information:</h4>
//			<p>Additional House Details go here. If I keep writing we should see that the max width of the box doesn't exceed 50% of the screen.</p>
//		</div>
//		<div class="clear"></div>
//	</div>
//</li>


const ListItem = ({property, onPropertySelect}) => {
	return (
		<li onClick = {() => onPropertySelect(property)}>
			<div class="listitem">
				<div class="listitemdescription">
					<h3>Address</h3>
					<p className="address">{property.address.steet}</p>
					<p className="address">{property.address.city}, {property.address.state} {property.address.zipcode}</p>
					<h4>Zillow Estimate: </h4>
					<span> ${property.zestimate.amount["#text"]}</span><br />
					<h4>Region/Neighborhood: </h4>
					<span> {property.localRealEstate.region["-name"]}</span><br />
					<h4>Additional Information: </h4>
					<p>{property.links.homedetails}</p>
				</div>
				<div class="clear"></div>
			</div>
		</li>
	);
};

export default ListItem;