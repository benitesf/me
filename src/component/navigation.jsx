import React, { Component } from 'react'

export default class Navigation extends Component {
	render() {
		return (
			<header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp" id="mh-header">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<nav className="navbar navbar-expand-lg mh-nav nav-btn">
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon icon"></span>
							</button>

							<div className="navbar-collapse collapse" id="navbarSupportedContent">
								<ul className="navbar-nav mr-0 ml-auto">
									<li className="nav-item active">
										<a className="nav-link" href="#mh-home">Home</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#mh-about">About</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#mh-experience">Experience</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#mh-portfolio">Projects</a>
									</li>
									<li className="nav-item">
										<a className="nav-link"  href="#mh-contact">Contact</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}
