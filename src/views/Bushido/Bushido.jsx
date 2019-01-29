import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/fullHeightPermanentDrawer.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
// import TeamSection from "./Sections/TeamSection.jsx";
import ProcessesAndToolsSection from "./Sections/ProcessesAndToolsSection.jsx";
import ClientSection from "./Sections/ClientSection.jsx";
import PortfolioSectionTabs from "./Sections/PortfolioSectionTabs.jsx";
import PricingSectionTabs from "./Sections/PricingSectionTabs.jsx";
import ScrollIntoView from 'react-scroll-into-view';


class Bushido extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Header
					color="transparent"
					// routes={dashboardRoutes}
					// brand={	<img src={bushido} className={classes.bushidoSVG} alt="bushido_logo"/>}
					// rightLinks={<HeaderLinks />}
					fixed
					// changeColorOnScroll={{
					// 	height: 400,
					// 	color: "black"
					// }}
					{...rest}
				/>
				<Parallax filter image={require("assets/img/land.jpg")}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={8}>
								<h1 className={classes.title}>
									Blockchain <br />
									Development. Simplified.
								</h1>
								<br />
								<ScrollIntoView
									alignToTop={true}
									selector={`#Contact`}
								>
									<Button
										color="danger"
										size="lg"
										// href="/contact"
										target="_blank"
										rel="noopener noreferrer"
									>
										{/* <i className="fas fa-play" /> */}
										Get a Quote
									</Button>
								</ScrollIntoView>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				{/* <div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<ProductSection />
					</div>
				</div>
				<div>
					<PortfolioSectionTabs />
				</div> */}
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<div id="Services">
							<ProductSection />
						</div>
						{/* <PortfolioSection /> */}
						<div id="Portfolio">
							<PortfolioSectionTabs />
						</div>
						<div id="Processes">
							<ProcessesAndToolsSection />
						</div>
						{/* <div> */}
						<PricingSectionTabs />
						{/* </div> */}
						<ClientSection />
						<WorkSection />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(Bushido);
