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
								<p className="address">123 Fake Address</p>
								<p className="address">Highlands Ranch, Colorado 80126</p>
								<h4>Zillow Estimate: </h4> 
								<span> $123564</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Castle Pines</span><br />
								<h4>Additional Information:</h4>
								<p>Additional House Details go here. If I keep writing we should see that the max width of the box doesn't exceed 50% of the screen.</p>
							</div>
							<div class="clear"></div>
						</div>
					</li>
					<li>
							<div class="listitem">
							<div class="listitemdescription">
								<h3>Address</h3>
								<p className="address">234 Fake Address</p>
								<p className="address">Highlands Ranch, Colorado 80126</p>
								<h4>Zillow Estimate: </h4> 
								<span> $123564</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Castle Pines</span><br />
								<h4>Additional Information:</h4>
								<p>Additional House Details go here. If I keep writing we should see that the max width of the box doesn't exceed 50% of the screen.</p>
							</div>
							<div class="clear"></div>
						</div>
					</li>
					<li>
						<div class="listitem">
							<div class="listitemdescription">
								<h3>Address</h3>
								<p className="address">345 Fake Address</p>
								<p className="address">Highlands Ranch, Colorado 80126</p>
								<h4>Zillow Estimate: </h4> 
								<span> $123564</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Castle Pines</span><br />
								<h4>Additional Information:</h4>
								<p>Additional House Details go here. If I keep writing we should see that the max width of the box doesn't exceed 50% of the screen.</p>
							</div>
							<div class="clear"></div>
						</div>
					</li>
					<li>
						<div class="listitem">
							<div class="listitemdescription">
								<h3>Address</h3>
								<p className="address">456 Fake Address</p>
								<p className="address">Highlands Ranch, Colorado 80126</p>
								<h4>Zillow Estimate: </h4> 
								<span> $123564</span><br />
								<h4>Region/Neighborhood: </h4>
								<span> Castle Pines</span><br />
								<h4>Additional Information:</h4>
								<p>Additional House Details go here. If I keep writing we should see that the max width of the box doesn't exceed 50% of the screen.</p>
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