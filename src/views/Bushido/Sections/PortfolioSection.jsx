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
import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
import tech_0x from "assets/img/tech/0x.png";
import tech_graphql from "assets/img/tech/graphql.png"
import tech_html5 from "assets/img/tech/html5.png"
import tech_js from "assets/img/tech/js.png"
import tech_lightning from "assets/img/tech/lightning.png"
import tech_react from "assets/img/tech/react.png"

class PortfolioSection extends React.Component {
	render() {
		const { classes } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false
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
						<GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
							<h2 className={classes.title}>SmartR</h2>
							<h5 className={classes.description}>
								A smart graph drawing app.
							</h5>
							<img
								className={classes.store_button_google}
								src={google_play}
								alt="google"
							/>
							<img
								className={classes.store_button_apple}
								src={apple_store}
								alt="apple store"
								// TODO fix height scaling
							/>
							<h5 className={classes.description}>
								SmartR was a great success for us, we were able to create a
								boostrap website that had loads of charts and sections that any
								doctor would love to look at for days.
							</h5>
							<GridContainer>
								<GridItem xs={6} sm={6} md={2}>
									<InfoAreaImage
										// title="0x Protocol"
										imgSrc={tech_0x}
										imgHeight="50px"
									/>
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoAreaImage
										// title="AWS"
										imgSrc={tech_react}
										imgHeight="50px"
									/>
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoAreaImage
										// title="GraphQL"
										imgSrc={tech_graphql}
										imgHeight="50px"
									/>
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoAreaImage
										// title="HTML5"
										imgSrc={tech_html5}
										imgHeight="50px"
									/>
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoAreaImage
										// title="Javascript"
										imgSrc={tech_js}
										imgHeight="50px"
									/>
								</GridItem>
								<GridItem xs={6} sm={6} md={2}>
									<InfoAreaImage
										// title="Lightning"
										imgSrc={tech_lightning}
										imgHeight="50px"
									/>
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
