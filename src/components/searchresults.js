import React from 'react';
import SearchedProp from './searchedprop';
import PropertyList from './list';

// Replace everything including the <ul> under <h2>comparable properties</h2> with the following when go-live:
//				<PropertyList 
//					properties = {properties}
//					onPropertySelect = {selectedProperty => this.setState({ selectedProperty })}
//				/>

const SearchResults = ({searchProperty, properties})  => {

	return (
		<div className = "section-SearchResults">
			<div className = "row SearchedProp">
				<br />
				<h2>Searched Property Details</h2>
					<SearchedProp 
						searchProperty = {searchProperty}
						onPropertySelect={()=>{
							//stuff goes here
						}}
					/>
			</div>
			<div className = "clear"></div>
			<div className = "row List">
				<br />
				<h2>Comparable Properties</h2>
				<ul className="listshell">
					<li>
						<div class="listitem">
							<div class="listitemdescription">
								<h3>Address</h3>
								<p className="address">731 E 70th St</p>
								<p className="address">Long Beach, CA 90805</p>
								<h4>Zillow Estimate: </h4> 
								<span> $619,000</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Long Beach</span><br />
								<h4>Additional Information:</h4>
								<p>Rare highly-upgraded residence has been tastefully modernized with tremendous detail, which has been entirely remodeled in 2005. The open floor plan is ideal for casually-elegant living, comprised of 3 bedrooms and 2.5 baths.</p>
							</div>
							<div class="clear"></div>
						</div>
					</li>
					<li>
							<div class="listitem">
							<div class="listitemdescription">
								<h3>Address</h3>
								<p className="address">25 Topside Ct </p>
								<p className="address">Long Beach, CA 90803</p>
								<h4>Zillow Estimate: </h4> 
								<span> $699,000</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Long Beach</span><br />
								<h4>Additional Information:</h4>
								<p>This Fabulous Home is situated on a beautiful Green Belt! Completely shows like a Model Home. It all starts with a fun front door and Mailbox. You open to High Cathedral Ceilings in the Living Room - a great feeling of OPENNESS. </p>
							</div>
							<div class="clear"></div>
						</div>
					</li>
					<li>
						<div class="listitem">
							<div class="listitemdescription">
								<h3>Address</h3>
								<p className="address">24 Redondo Ave</p>
								<p className="address">Long Beach, CA 90803</p>
								<h4>Zillow Estimate: </h4> 
								<span> $849,000</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Long Beach</span><br />
								<h4>Additional Information:</h4>
								<p>Overflowing with charm & character, this sweet, light filled 2 bed 1 bath cottage located ½ a block to the ocean in the delightful community of Bluff Park is a must see.</p>
							</div>
							<div class="clear"></div>
						</div>
					</li>
					<li>
						<div class="listitem">
							<div class="listitemdescription">
								<h3>Address</h3>
								<p className="address">2433 E 15th St</p>
								<p className="address">Long Beach, CA 90804</p>
								<h4>Zillow Estimate: </h4> 
								<span> $498,000</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Long Beach</span><br />
								<h4>Additional Information:</h4>
								<p>This turnkey dream home is ready for your Christmas. It is built in 1999 and freshly remodeled. It features a beautiful gated front yard and a large paved back yard with minimum maintenance.</p>
							</div>
							<div class="clear"></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SearchResults;