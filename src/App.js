import React, { Component } from 'react';
import './App.css';
import LoaderC from './component/loader'
import Navigation from './component/navigation'
import Home from './component/home'
import About from './component/about'
import Experience from './component/experience'
import Project from './component/project'
import Contact from './component/contact'

class App extends Component {
	render() {
		return (
			<div>
				<LoaderC></LoaderC>
				<Navigation></Navigation>
				<Home></Home>
				<About></About>
				<Experience></Experience>
				<Project></Project>
				<Contact></Contact>
			</div>
		);
	}
}

export default App;
