import React from 'react';
import ListItem from './listitem';

// need to define zillow.id as key under ListItem property - may be:	key = {property["Comps:comps:"].response.properties.comparables.comp.zpid[0]}

const PropertyList = ({properties, onPropertySelect})  => {
	const PropertyList = properties.map(property => {
		return (
			<ListItem 
				property = {property["Comps:comps:"].response.properties.comparables.comp}
				onPropertySelect = {onPropertySelect}
			/>
		)
	});

	return (
		<ul id="list">
			{PropertyList}
		</ul>
	);
}

export default PropertyList;