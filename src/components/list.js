import React from 'react';
import ListItem from './listitem';

// need to define zillow.id as key under ListItem property - may be:	key = {property["Comps:comps:"].response.properties.comparables.comp.zpid[0]}
// use {property["Comps:comps:"].response.properties.comparables.comp} when property values are being stored correctly.


const PropertyList = ({properties, onPropertySelect})  => {
	const PropertyList = properties.map(property => {
		return (
			<ListItem 
				property = {property}
				onPropertySelect = {onPropertySelect}
			/>
		)
	});

	return (
		<ul className="listshell">
			{PropertyList}
		</ul>
	);
}

export default PropertyList;