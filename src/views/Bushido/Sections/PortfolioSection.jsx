import React from "react";
// react component for creating beautiful carousel
import classNames from "classnames";
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import apple_store from "assets/img/app_store.png";
import google_play from "assets/img/google_play.png";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Fingerprint from "@material-ui/icons/Fingerprint";

class PortfolioSection extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(classes.store_button);
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
		};
		return (
			<div className={classes.section}>
				<div className={classes.container}>
					<h2 className={classes.titleMain}>Some of our works</h2>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
							<Card carousel>
								<Carousel {...settings}>
									<div>
										<img
											src={image1}
											alt="First slide"
											className="slick-image"
										/>
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
												Yellowstone National Park, United States
											</h4>
										</div>
									</div>
									<div>
										<img
											src={image2}
											alt="Second slide"
											className="slick-image"
										/>
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
												Somewhere Beyond, United States
											</h4>
										</div>
									</div>
									<div>
										<img
											src={image3}
											alt="Third slide"
											className="slick-image"
										/>
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
												Yellowstone National Park, United States
											</h4>
										</div>
									</div>
								</Carousel>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6}>
							<h2 className={classes.title}>SmartR</h2>
							<h5 className={classes.description}>
								A smart graph drawing app.
							</h5>
							<img className={imageClasses} src={google_play} alt="google" />
							<img
								className={imageClasses}
								src={apple_store}
								alt="apple store"
							/>
							<h5 className={classes.description}>
								SmartR was a great success for us, we were able to create a
								boostrap website that had loads of charts and sections that any
								doctor would love to look at for days.
							</h5>
							<GridContainer>
								<GridItem xs={6} sm={6} md={2}>
									<InfoArea icon={Fingerprint} iconColor="danger" />
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoArea icon={Fingerprint} iconColor="danger" />
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoArea icon={Fingerprint} iconColor="danger" />
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoArea icon={Fingerprint} iconColor="danger" />
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoArea icon={Fingerprint} iconColor="danger" />
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoArea icon={Fingerprint} iconColor="danger" />
								</GridItem>
							</GridContainer>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(carouselStyle)(PortfolioSection);
