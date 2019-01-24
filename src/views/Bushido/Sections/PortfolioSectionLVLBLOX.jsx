import React from "react";
// react component for creating beautiful carousel
// import classNames from "classnames";
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/portfolio/vera_deploy.png";
import image2 from "assets/img/portfolio/vera_reconcile.png";
import image3 from "assets/img/portfolio/vera_entitlement.png";

import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
import golang from "assets/img/SVG/go-plain.svg";
import appolo from "assets/img/SVG/appolo.svg";
import graphql from "assets/img/SVG/GraphQL.svg";

import github from "assets/img/SVG/github-original.svg";
import fabric from "assets/img/SVG/hyperledger_fabric.svg";
import java from "assets/img/SVG/java-plain-wordmark.svg";
// import { Button } from "@material-ui/core";

class PortfolioSectionLVLBLOX extends React.Component {
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
					{/* <h2 className={classes.titleMain}>Some of our works</h2> */}
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
										{/* <div className="slick-caption">
											<h4>Home Page anonfork.io</h4>
										</div> */}
									</div>
									<div>
										<img
											src={image2}
											alt="Second slide"
											className="slick-image"
										/>
										{/* <div className="slick-caption">
											<h4>ANON Block Explorer</h4>
										</div> */}
									</div>
									<div>
										<img
											src={image3}
											alt="Third slide"
											className="slick-image"
										/>
										{/* <div className="slick-caption">
											<h4>ANON Block Explorer</h4>
										</div> */}
									</div>
								</Carousel>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
							<h2 className={classes.title}>Software Asset Management Blockchain</h2>
							<h5 className={classes.description}>
							Smart asset management.
							</h5>
							<i className={classes.socialIcons + " fab fa-github"} />
							<i className={classes.socialIcons + " fab fa-twitter"} />
							<i className={classes.socialIcons + " fab fa-telegram"} />
							<i className={classes.socialIcons + " fab fa-discord"} />
							<i className={classes.socialIcons + " fab fa-reddit"} />
							<i className={classes.socialIcons + " fab fa-youtube"} />
							<h5 className={classes.description}>
							A blockchain solution that offers better tracking and audit
								services for companies utilizing software licensing. In our
								proof of concept development, we built out a Hyperledger Fabric
								implementation of the Oracle Java license usage tracker complete
								with MSP(member service provider) for abstraction of membership
								operation architecture for certificate issuance and
								authentication.
							</h5>
							<h3 className={classes.title}>Tech Utilized: </h3>
							<GridContainer>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="0x Protocol"
										imgSrc={appolo}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="AWS"
										imgSrc={java}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="GraphQL"
										imgSrc={golang}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="HTML5"
										imgSrc={graphql}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="Javascript"
										imgSrc={github}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="Lightning"
										imgSrc={fabric}
										portfolio
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

export default withStyles(carouselStyle)(PortfolioSectionLVLBLOX);
