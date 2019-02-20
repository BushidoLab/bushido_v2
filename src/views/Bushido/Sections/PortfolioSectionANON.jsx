import React from "react";
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "bushido_v2/src/components/Grid/GridContainer.jsx";
import GridItem from "bushido_v2/src/components/Grid/GridItem.jsx";
import Card from "bushido_v2/src/components/Card/Card.jsx";
import carouselStyle from "bushido_v2/src/assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
// screenshots
import image1 from "bushido_v2/src/assets/img/portfolio/anonfork.png";
import image2 from "bushido_v2/src/assets/img/portfolio/explorer.png";
import image3 from "bushido_v2/src/assets/img/portfolio/explorer_blocks.png";
import image4 from "bushido_v2/src/assets/img/portfolio/anon_proposals.png";
import image5 from "bushido_v2/src/assets/img/portfolio/anon_copay.png";
// svg logos
import cplus from "bushido_v2/src/assets/img/SVG/cplus.svg";
import linux from "bushido_v2/src/assets/img/SVG/linux-plain.svg";
import nodejs from "bushido_v2/src/assets/img/SVG/nodejs-plain.svg";
import github from "bushido_v2/src/assets/img/SVG/github-original.svg";
import gradle from "bushido_v2/src/assets/img/SVG/gradle-plain.svg";
import java from "bushido_v2/src/assets/img/SVG/java-plain-wordmark.svg";

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
							<h5 className={classes.description}>
								Co-fork between Bitcoin and Z-Classic with masternode
								implementations.
							</h5>
							<a href="https://www.anonfork.io/">
								<i className={classes.socialIcons + " fas fa-home"} />
							</a>
							<a href="https://github.com/anonymousbitcoin/anon">
								<i className={classes.socialIcons + " fab fa-github"} />
							</a>
							
							<a href="https://twitter.com/ANON_WeAreANON">
								<i className={classes.socialIcons + " fab fa-twitter"} />
							</a>
							
							<a href="https://t.me/ANONFork">
								<i className={classes.socialIcons + " fab fa-telegram"} />
							</a>
							
							<a href="https://discord.gg/9XQMspU">
								<i className={classes.socialIcons + " fab fa-discord"} />
							</a>
							
							<a href="https://github.com/anonymousbitcoin">
								<i className={classes.socialIcons + " fab fa-reddit"} />
							</a>
							
							<a href="https://www.youtube.com/channel/UCU-BMMTH8z0ow0xHjWZHRUg">
								<i className={classes.socialIcons + " fab fa-youtube"} />
							</a>
							<h5 className={classes.description}>
								ANON is a public decentralized blockchain that is a forked
								repository of Bitcoin(BTC) and Zclassic(ZCL). This project
								involved blockchain infrastructure, consensus design and
								development (layered), economic design, inflation schedule
								design, miner and masternode payment design and execution,
								wallet development, block explorers, merchant payment
								integration and exchange liquidity consultation.
							</h5>
							<h3 className={classes.title}>Tech Utilized: </h3>
							<GridContainer>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={cplus} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={java} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={linux} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={nodejs} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={github} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={gradle} portfolio />
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
