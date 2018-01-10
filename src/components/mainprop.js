import React, { Component } from 'react';
import PropDetails from './propdetails';

class MainProp extends Component {
	constructor(props) {
		super(props);

	}
		
	render() {
		return (
			<div className="section-MainProp">
				<div className="row">
					<div className="col span-4-of-4">
						<PropDetails />
					</div>
				</div>
			</div>
		);
	}
}

export default MainProp;