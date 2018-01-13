import React from 'react';

const SearchedProp = ({searchProperty, onPropertySelect}) => {
	console.log(searchProperty)
	return (
		<li onClick = {() => onPropertySelect(searchProperty)}>
			<div className="listitem">
				<div className="listitemdescription">
					<p></p>
				</div>
				<div className="clear"></div>
			</div>
		</li>
	);
};

export default SearchedProp;