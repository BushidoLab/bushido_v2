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
import image1 from "assets/img/portfolio/tune1.png";
import image2 from "assets/img/portfolio/tune2.png";
import image3 from "assets/img/portfolio/tune3.png";

import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
import solidity from "assets/img/SVG/Solidity_logo.svg";
import ethereum from "assets/img/SVG/ethereum.svg";
import nodejs from "assets/img/SVG/nodejs-plain.svg";
import github from "assets/img/SVG/github-original.svg";
import metamask from "assets/img/SVG/metamask.svg";
import javascript from "assets/img/SVG/javascript-plain.svg";

// graphql appolo react hyperledgerfabric oracle, java
// import { Button } from "@material-ui/core";

class PortfolioSectionTUNE extends React.Component {
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
							<h2 className={classes.title}>TUNE TOKEN</h2>
							<h5 className={classes.description}>
								Music Collaboration Democratized and Incentivized
							</h5>
							<i className={classes.socialIcons + " fab fa-github"} />
							<i className={classes.socialIcons + " fab fa-twitter"} />
							<i className={classes.socialIcons + " fab fa-telegram"} />
							<i className={classes.socialIcons + " fab fa-discord"} />
							<i className={classes.socialIcons + " fab fa-reddit"} />
							<i className={classes.socialIcons + " fab fa-youtube"} />
							<h5 className={classes.description}>
								Tune Company is a software development and management company
								primarily focused on creating blockchain based technology, smart
								contract design and digital tokenized applications. Tune’s
								primary mission is to solve digital songwriter rights and
								royalty transparency issues for the music industry
							</h5>
							<h3 className={classes.title}>Tech Utilized: </h3>
							<GridContainer>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="0x Protocol"
										imgSrc={solidity}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="AWS"
										imgSrc={ethereum}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="GraphQL"
										imgSrc={javascript}
										portfolio
									/>
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="HTML5"
										imgSrc={nodejs}
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
										imgSrc={metamask}
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

export default withStyles(carouselStyle)(PortfolioSectionTUNE);
