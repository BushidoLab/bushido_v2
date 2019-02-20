import React from "react";
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "bushido_v2/src/components/Grid/GridContainer.jsx";
import GridItem from "bushido_v2/src/components/Grid/GridItem.jsx";
import Card from "bushido_v2/src/components/Card/Card.jsx";
import carouselStyle from "bushido_v2/src/assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import InfoAreaImage from "bushido_v2/src/components/InfoAreaImage/InfoAreaImage.jsx";
// screenshots
import image1 from "bushido_v2/src/assets/img/portfolio/vera_deploy.png";
import image2 from "bushido_v2/src/assets/img/portfolio/vera_reconcile.png";
import image3 from "bushido_v2/src/assets/img/portfolio/vera_entitlement.png";
// svg's
import golang from "bushido_v2/src/assets/img/SVG/go-plain.svg";
import appolo from "bushido_v2/src/assets/img/SVG/appolo.svg";
import graphql from "bushido_v2/src/assets/img/SVG/GraphQL.svg";
import github from "bushido_v2/src/assets/img/SVG/github-original.svg";
import fabric from "bushido_v2/src/assets/img/SVG/hyperledger_fabric.svg";
import java from "bushido_v2/src/assets/img/SVG/java-plain-wordmark.svg";

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
							<h2 className={classes.title}>
								Software Asset Management Blockchain
							</h2>
							<h5 className={classes.description}>Smart asset management.</h5>
							<a href="">
								<i className={classes.socialIcons + " fab fa-github"} />
							</a>
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
									<InfoAreaImage imgSrc={appolo} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={java} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={golang} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={graphql} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={github} portfolio />
								</GridItem>
								<GridItem xs={4} sm={4} md={2}>
									<InfoAreaImage imgSrc={fabric} portfolio />
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
