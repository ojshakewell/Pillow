import React, { Component } from 'react';
import PropDetails from './propdetails';
import PropImages from './propimages';
import Calc from './calc';

class MainProp extends Component {
	constructor(props) {
		super(props);

	}
		
	render() {
		return (
			<div className="section-MainProp">
					<div className="col span-2-of-4">
						<PropDetails />
					</div>
					<div className="col span-2-of-4">
						<PropImages />
					</div>	
				<Calc />
			</div>
		);
	}
}

export default MainProp;