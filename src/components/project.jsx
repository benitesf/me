import React, { Component } from 'react'

export default class Project extends Component {
	render() {
		return (
			<section className="mh-portfolio" id="mh-portfolio">
				<div className="container">
					<div className="row section-separator">
						<div className="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
							<h3>Recent Projects</h3>
						</div>
						<div className="part col-sm-12">
							<div className="portfolio-nav col-sm-12" id="filter-button">
								<ul>
									<li data-filter="*" className="current wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s"><span>All Categories</span></li>
									<li data-filter="" className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s"><span>Cat1</span></li>
									<li data-filter="" className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s"><span>Cat2</span></li>
									<li data-filter="" className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><span>Cat3</span></li>
								</ul>
							</div>
							<div className="mh-project-gallery col-sm-12 wow fadeInUp" id="project-gallery" data-wow-duration="0.8s" data-wow-delay="0.5">
								<div className="portfolioContainer row">
									<div className="grid-item col-md-4 col-sm-6 col-xs-12 user-interface">
										<figure>
											<img src="" alt=""/>
											<figcaption className="fig-caption">
												<i className="fa fa-search"></i>
												<h5 className="title">Project1</h5>
												<span className="Sub-title">Cat1</span>
												<a href="#0" data-fancybox data-src="#mh"></a>
											</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mh-portfolio-modal" id="mh">
					<div className="container">
						<div className="row mh-portfolio-modal-inner">
							<div className="col-sm-5">
								<h2>Wrap - A campanion plugin</h2>
								<p>Wrap is a clean and elegant Multipurpose Landing ...</p>
								<p>It is a clean an elegant ...</p>
								<div className="mh-about-tag">
									<ul>
										<li><span>php</span></li>
										<li><span>html</span></li>
										<li><span>css</span></li>
										<li><span>php</span></li>
										<li><span>React</span></li>
									</ul>
								</div>
								<a href="#0" className="btn btn-fill">Live Demo</a>
							</div>
							<div className="col-sm-7">
								<div className="mh-portfolio-modal-img">
									<img src="" alt="" className="img-fluid"/>
									<p>text of presentation</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
