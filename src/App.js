import React, { Component } from 'react';
import './App.css';
import LoaderC from './components/loader'
import Navigation from './components/navigation'
import Home from './components/home'
import About from './components/about'
import Experience from './components/experience'
import Project from './components/project'
import Contact from './components/contact'

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
