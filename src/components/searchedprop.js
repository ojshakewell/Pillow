import React from 'react';

const SearchedProp = ({searchProperty, onPropertySelect}) => {
	return (
		<li onClick = {() => onPropertySelect(searchProperty)}>
			<div class="listitem">
				<div class="listitemdescription">
					<p>{searchProperty}</p>
				</div>
				<div class="clear"></div>
			</div>
		</li>
	);
};

export default SearchedProp;