import React, { Component } from 'react'

export default class Contact extends Component {
	render() {
		return (
			<footer className="mh-footer" id="mh-contact">
				<div className="map-image image-bg">
					<div className="container">
						<div className="row section-separator">
							<div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
								<h3>Contact Me</h3>
							</div>
							<div className="col-sm-12 mh-footer-address">
								<div className="row vertical-middle-content">
									<div className="col-sm-12 col-md-4">
										<div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
											<div className="each-icon">
												<i className="fa fa-envelope-o"></i>
											</div>
											<div className="each-info">
												<h4>Email</h4>
												<a href="mailto:benites.ee@gmail.com">benites.ee@gmail.com</a><br></br>
												<a href="mailto:edzon_bf@hotmail.com">edzon_bf@hotmail.com</a>
											</div>
										</div>
									</div>
									<div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
										<div className="row">
											<div className="col-sm-6">
												<div className="text-left text-xs-center">
													<p>© Edson BF, 2020</p>
												</div>
											</div>
											<div className="col-sm-6">
												<ul className="social-icon">
													<li><a href="https://github.com/benitesf" target="_blank"><i className="fa fa-github"></i></a></li>
													<li><a href="https://twitter.com/e2benites" target="_blank"><i className="fa fa-twitter"></i></a></li>
													<li><a href="https://linkedin.com/in/edson-esteban-benites-fernández-6298aa143" target="_blank"><i className="fa fa-linkedin"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
