import React, { Component } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Search from './components/search';
import Body from './components/body';
import GoogleMap from './components/map';
import List from './components/list';
import MainProp from './components/mainprop';
import PropDetails from './components/propdetails';
import PropImages from './components/propimages.js';
import Calc from './components/calc';
import Comparison from './components/comparison';
import UserInfo from './components/userinfo';
import Footer from './components/footer';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Hero />
				<Search />
				<Body />
				<GoogleMap />
				<List />
				<MainProp />
				<PropDetails />
				<PropImages />
				<Calc />
				<Comparison />
				<UserInfo />
				<Footer />
			</div>
		);
	}
}

export default App;