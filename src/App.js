import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Body from './components/body';
import SearchResults from './components/searchresults';
import MainProp from './components/mainprop';
import UserInfo from './components/userinfo';
import Footer from './components/footer';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			page: "search"
		}
	}

	runSearch (term) {
		console.log("Great Success");
		// 		YouTubeSearch({ key: apiKey, term: term }, videos => {
		//     console.log(videos);

		//     this.setState({
		//     	properties: properties,
		//     	selectedProperty: properties[0]
		//     });
		// 		});	
	}

	render() {

		const runSearchThrottle = _.debounce((term) => {this.runSearch(term)}, 700);
		console.log(this.props);

		return (
			<div className="App">
				{this.state.page === "search" &&
					<Fragment>
						<div className="header2">
							<Header />
						</div>
						<SearchResults />
						<Footer />
						<div class="clear"></div>
					</Fragment>
				}
				{this.state.page === "property" &&
					<Fragment>
						<div className="header2">
							<Header />
						</div>
						<MainProp />
						<Footer />
						<div class="clear"></div>
						</Fragment>
				}
				{this.state.page === "user" &&
					<Fragment>
						<div className="header2">
							<Header />
						</div>
						<UserInfo />
						<Footer />
						<div class="clear"></div>
					</Fragment>
				}
				{this.state.page === "home" &&
					<Fragment>
						<div className="header">
							<Header />
							<div className="clear"></div>
							<Hero 
								onSearchTermChange={runSearchThrottle}
							/>
						</div>
						<Body />
						<Footer />
						<div class="clear"></div>
					</Fragment>
				}
			</div>
		);
	}
}

export default App;