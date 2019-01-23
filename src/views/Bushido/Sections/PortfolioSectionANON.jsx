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
import image1 from "assets/img/portfolio/anonfork.png";
import image2 from "assets/img/portfolio/explorer.png";
import image3 from "assets/img/portfolio/explorer_blocks.png";
import image4 from "assets/img/portfolio/anon_proposals.png";
import image5 from "assets/img/portfolio/anon_copay.png";

import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
import cplus from "assets/img/SVG/cplus.svg";
import linux from "assets/img/SVG/linux-plain.svg";
import nodejs from "assets/img/SVG/nodejs-plain.svg";
import github from "assets/img/SVG/github-original.svg";
import gradle from "assets/img/SVG/gradle-plain.svg";
import java from "assets/img/SVG/java-plain-wordmark.svg";
// import { Button } from "@material-ui/core";

class PortfolioSectionANON extends React.Component {
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
											alt="anonfork.io"
											className="slick-image"
										/>
									</div>
									<div>
										<img
											src={image2}
											alt="anon_explorer"
											className="slick-image"
										/>
									</div>
									<div>
										<img
											src={image3}
											alt="anon_block_explorer"
											className="slick-image"
										/>
									</div>
									<div>
										<img
											src={image4}
											alt="Proposal Generator"
											className="slick-image"
										/>
									</div>
									<div>
										<img
											src={image5}
											alt="Copay Screenshots"
											className="slick-image"
										/>
									</div>
								</Carousel>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
							<h2
								className={classes.title}
								style={{
									fontFamily: '"Roboto", "Times New Roman", serif',
									fontStyle: "italic"
								}}
							>
								ANON
							</h2>
							<h5 className={classes.description}>Co-fork between Bitcoin and Z-Classic with masternode implementations.</h5>
							<i className={classes.socialIcons + " fab fa-github"} />
							<i className={classes.socialIcons + " fab fa-twitter"} />
							<i className={classes.socialIcons + " fab fa-telegram"} />
							<i className={classes.socialIcons + " fab fa-discord"} />
							<i className={classes.socialIcons + " fab fa-reddit"} />
							<i className={classes.socialIcons + " fab fa-youtube"} />
							<h5 className={classes.description}>
								ANON is a public decentralized blockchain that is a forked repository of Bitcoin(BTC) and Zclassic(ZCL). This has been Bushido’s largest undertaking to date. This project involved blockchain infrastructure, consensus design and development (layered), economic design, inflation schedule design, miner and masternode payment design and execution, wallet development, block explorers, merchant payment integration and exchange liquidity consultation.

							</h5>

							<h3 className={classes.title}>Tech Utilized: </h3>
							<GridContainer>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage
										// title="0x Protocol"
										imgSrc={cplus}
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
										imgSrc={linux}
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
										imgSrc={gradle}
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

export default withStyles(carouselStyle)(PortfolioSectionANON);
