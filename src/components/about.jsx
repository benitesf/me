import React, { Component } from 'react'
import Logo from '../images/ab-img.png'

export default class About extends Component {
	render() {
		return (
			<section className="mh-about" id="mh-about">
				<div className="container">
					<div className="row section-separator">
						<div className="col-sm-12 col-md-6">
							<div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
								<img src={Logo} alt="logo" className="img-fluid"/>
							</div>
						</div>
						<div className="col-sm-12 col-md-6">
							<div className="mh-about-inner">
								<h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
								<p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Hello, I'm Edson, computer engineer based on Navarre, Spain.</p>
								<div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
									<ul>
										<li><span>Python</span></li>
										<li><span>Golang</span></li>
										<li><span>Docker</span></li>
										<li><span>API Rest</span></li>
									</ul>
								</div>
								<a href="#0" className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" rel="noopener">Download CV <i className="fa fa-download"></i></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
