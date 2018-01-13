import React from 'react';

const Body = () => {

		return (
			<div className="Body">
				<section className="section-features">
					<div className="row">
						<h2>Best Home &mdash; Best Price</h2>
						<p className="long-copy">Pillow is the number one place to find your next home. We're a site dedictated to delivering MLS listed homes near you for your next home upgrade. Our site contains many features, including:</p>
					</div>
					<div className="row">
						<div className="col span-1-of-4 box">
							<i className="ion-android-search icon-big"></i>
							<h3>Search Options</h3>
							<p>Search an address to find properties nearby with similar homes to compare. More advanced criteria coming soon. We'll provide the best results no matter what.</p>
						</div>
						<div className="col span-1-of-4 box">
							<i className="ion-podium icon-big"></i>
							<h3>Home Comparisons</h3>
							<p>Review multiple properties at once. Find details about size, price, age, quality, neighborhoods, maps, and so much more!</p>
						</div>
						<div className="col span-1-of-4 box">
							<i className="ion-social-usd icon-big"></i>
							<h3>We Know What you Like!</h3>
							<p>Using a property you enjoy, or your current home, we can find similar properties in the area for you to check out.</p>
						</div>
						<div className="col span-1-of-4 box">
							<i className="ion-person icon-big"></i>
							<h3>User Accounts</h3>
							<p>Get busy and need to finish later? Searching for houses daily with the same criteria? Sign-in and save your favorite searches!</p>
						</div>
					</div>
				</section>
				<div className="clear"></div>
				<section className="section-steps">
					<div className="row">
						<h2>Finding the Right Home is Simple</h2>
					</div>
					<div className="row">
						<div className="col span-1-of-2 steps-box">
							<img className="home-steps" src="css/img/home-steps.jpg" alt="Easy Home Buying"/>
						</div>	
						<div className="col span-1-of-2 steps-box">
							<div className="works-step">
								<div>1</div>
								<p>Enter the address, city, and state of the home you would like to compare against.</p>
							</div>
							<div className="works-step">
								<div>2</div>
								<p>Browse similar MLS listed homes in your area, and select a property to view additional detials.</p>
							</div>
							<div className="works-step">
								<div>3</div>
								<p>Create an account to save your search criteria and favorite houses for when you come back later.</p>
							</div>
						</div>
					</div>
				</section>
				<div className="clear"></div>
			</div>
		);
}

export default Body;