import React, { Component } from 'react';

class UserInfo extends Component {
	constructor(props) {
		super(props);

	}
	
	render() {
		return (
			<div className="section-UserInfo">
				

				<p>Username: You gave it, you should know it...</p>
				<p>Password: You think I'll tell you that?</p>
				<br />
				<p>Saved Properties: I'm not psychic.</p>


			</div>
		);
	}
}

export default UserInfo;