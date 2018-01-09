import React from 'react';

const Header = () => {
	return (
		<nav className="Header">
			<div className="row">
				<img className="logo" src="css/img/logo-white.png" alt="Pillow Logo"/>
				<ul className='main-nav'>
					<li><a href="#">SIGN-UP/LOGIN</a></li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;