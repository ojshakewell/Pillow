import React from 'react';

// need to update the function runSearch in App.js and include as a property for onClick here of the li item - see demo example from react lady
// need to determine what to show for each property and update in the li item

const ListItem = ({property}) => {
	return (
		<li>
			<div class="listitem">
				<div class="listitemimg">
					<img src="http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/15/Pictures/dream-house-front_8843d09c-ab15-11e6-b961-04ee4fa7b706.jpg" alt="fake image" />
				</div>
				<div class="listitemdescription">
					<p>{property}</p>
				</div>
				<div class="clear"></div>
			</div>
		</li>
	);
};

export default ListItem;