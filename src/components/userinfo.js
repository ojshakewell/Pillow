import React, { Component } from 'react';
import Login from './login';
//Jon, you need to make this pull data from the database and display it on screen. We need a decent UI for this page.
//At this point, it's up to you and Brian if we store any other information for users. Originally we discussed
//saving user searches and/or properties. I didn't add a favorite button to the properties so you would need to do that.

class UserInfo extends Component {
	constructor(props) {
		super(props);

	}
	
	render() {
		return (
			<div className="section-UserInfo">
				
				<Login />
				<p>Username: You gave it, you should know it...</p>
				<p>Password: You think I'll tell you that?</p>
				<br />
				<p>Saved Properties: I'm not psychic.</p>


			</div>
		);
	}
}

export default UserInfo;