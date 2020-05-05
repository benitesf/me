import React, { Component } from 'react'

export default class Experience extends Component {
	render() {
		return (
			<section className="mh-experince" id="mh-experience">
				<div className="bolor-overlay">
					<div className="container">
						<div className="row section-separator">
							<div className="col-sm-12 col-md-6">
								<div className="mh-education">
									<h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
									<div className="mh-education-deatils">
										<div className="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
											<h4>Computer Egineering From <a haref="">Public University of Navarre</a></h4>
											<div className="mh-eduyear">2012-2018</div>
											<p>Add text</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-6">
								<div className="mh-work">
									<h3>Work Experience</h3>
									<div className="mh-experience-deatils">
										<div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
											<h4>Research Assistant <a href="" rel="noopener">Vicomtech</a></h4>
											<div className="mh-eduyear">November 2019 - Present</div>
											<span>Responsibility :</span>
											<ul className="work-responsibility">
												<li><i className="fa fa-circle"></i>res1</li>
												<li><i className="fa fa-circle"></i>res2</li>
											</ul>
										</div>
										<div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
											<h4>AI Engineer <a href="" rel="noopener">Bambrai</a></h4>
											<div className="mh-eduyear">February 2019 - October 2019</div>
											<span>Responsibility :</span>
											<ul className="work-responsibility">
												<li><i className="fa fa-circle"></i>res1</li>
												<li><i className="fa fa-circle"></i>res2</li>
											</ul>
										</div>
										<div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.8s">
											<h4>Intern Intelligent Systems <a href="" rel="noopener">AIN</a></h4>
											<div className="mh-eduyear">February 2019 - October 2019</div>
											<span>Responsibility :</span>
											<ul className="work-responsibility">
												<li><i className="fa fa-circle"></i>res1</li>
												<li><i className="fa fa-circle"></i>res2</li>
											</ul>
										</div>
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
