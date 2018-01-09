import React from 'react';
import ListItem from './listitem';

// need to define zillow.id as key under ListItem property
// update sizing for full-page view

const PropertyList = ({properties})  => {
	const PropertyList = properties.map(property => {
		return (
			<ListItem 
				property={property} 
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