import React, { Component } from 'react'

export default class Home extends Component {
	render() {
		return (
			<section className="mh-home" id="mh-home">
				<div className="home-ovimg">
					<div className="container">
						<div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
							<div className="col-sm-6">
								<div className="mh-header-info">
									<div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
										<span>Hello I'm</span>
									</div>
									<h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Edson Benites</h2>
									<h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">Computer Engineer</h4>
									<ul>
										<li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i className="fa fa-envelope"></i><a href="mailto:benites.ee@gmail.com">benites.ee@gmail.com</a></li>
										<li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><i className="fa fa-map-marker"></i><address>Navarre, Spain</address></li>
									</ul>
									<ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
										<li><a href="https://github.com/benitesf" target="noopener"><i className="fa fa-github"></i></a></li>
										<li><a href="https://twitter.com/e2benites" target="noopener"><i className="fa fa-twitter"></i></a></li>
										<li><a href="https://linkedin.com/in/edson-esteban-benites-fernández-6298aa143" target="noopener"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
									<div className="img-border">
										<img src="" alt="" className="img-fluid"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
