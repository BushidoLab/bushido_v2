import React from "react";
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "bushido_v2/src/components/Grid/GridContainer.jsx";
import GridItem from "bushido_v2/src/components/Grid/GridItem.jsx";
import Card from "bushido_v2/src/components/Card/Card.jsx";
import carouselStyle from "bushido_v2/src/assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import InfoAreaImage from "bushido_v2/src/components/InfoAreaImage/InfoAreaImage.jsx";
// screenshots
import image1 from "bushido_v2/src/assets/img/portfolio/tune1.png";
import image2 from "bushido_v2/src/assets/img/portfolio/tune2.png";
import image3 from "bushido_v2/src/assets/img/portfolio/tune3.png";
// svg's
import solidity from "bushido_v2/src/assets/img/SVG/Solidity_logo.svg";
import ethereum from "bushido_v2/src/assets/img/SVG/ethereum.svg";
import nodejs from "bushido_v2/src/assets/img/SVG/nodejs-plain.svg";
import github from "bushido_v2/src/assets/img/SVG/github-original.svg";
import metamask from "bushido_v2/src/assets/img/SVG/metamask.svg";
import javascript from "bushido_v2/src/assets/img/SVG/javascript-plain.svg";

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
									</div>
									<div>
										<img
											src={image2}
											alt="Second slide"
											className="slick-image"
										/>
									</div>
									<div>
										<img
											src={image3}
											alt="Third slide"
											className="slick-image"
										/>
									</div>
								</Carousel>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
							<h2 className={classes.title}>TUNE TOKEN</h2>
							<h5 className={classes.description}>
								Music Collaboration Democratized and Incentivized.
							</h5>
							<a href="https://www.tunetoken.io/">
								<i className={classes.socialIcons + " fas fa-home"} />
							</a>
							<a href="https://twitter.com/TuneBlockchain">
								<i className={classes.socialIcons + " fab fa-twitter"} />
							</a>
							<a href="https://t.me/RecordgramICO">
								<i className={classes.socialIcons + " fab fa-telegram"} />
							</a>
							<a href="https://medium.com/tunetoken">
								<i className={classes.socialIcons + " fab fa-medium"} />
							</a>
							<a href="https://www.reddit.com/r/TuneToken/">
								<i className={classes.socialIcons + " fab fa-reddit"} />
							</a>
							<h5 className={classes.description}>
								Tune Company is a software development and management company
								primarily focused on creating blockchain based technology, smart
								contract design and digital tokenized applications. Tune’s
								primary mission is to solve digital songwriter rights and
								royalty transparency issues for the music industry.
							</h5>
							<h3 className={classes.title}>Tech Utilized: </h3>
							<GridContainer>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={solidity} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={ethereum} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={javascript} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={nodejs} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={github} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={metamask} portfolio />
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
