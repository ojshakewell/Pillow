import React from 'react';
import Search from './search';

const Hero = (props) => {

		return (
			<div className="Hero">
				<div className="hero-text-box">
					<h1>FIND THE PERFECT PLACE TO LAY YOUR HEAD</h1>
					<Search onSearchTermChange={props.onSearchTermChange} />
				</div>
			</div>
		);
}

export default Hero;