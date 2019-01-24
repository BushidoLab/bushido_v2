import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Typing from "react-typing-animation";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
// import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import ProcessesAndToolsSection from "./Sections/ProcessesAndToolsSection.jsx";
import PricingSection from "./Sections/PricingSectionProduct.jsx";
import ClientSection from "./Sections/ClientSection.jsx";
import PortfolioSectionTabs from "./Sections/PortfolioSectionTabs.jsx";
import PricingSectionTabs from "./Sections/PricingSectionTabs.jsx";
import bushido from "assets/img/bushido/bushidolab.svg";

const dashboardRoutes = ["/bushido"];

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
				<Parallax filter image={require("assets/img/bg7.png")}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								{/* <Typing>
									<h1 className={classes.title}>Blockchain Simplifed</h1>
									<Typing.Reset count={1} delay={500} />
									<h1 className={classes.title}>Blockchain Complicated again LOL</h1>
								</Typing> */}
								<h1 className={classes.title}>Blockchain Development.</h1>
								<h1 className={classes.title}>Simplified.</h1>
								<Typing>
									<h4>
										Bushido Lab. The Code Dojo. Where sick devving happens.
									</h4>
								</Typing>
								<br />
								<Button
									color="danger"
									size="lg"
									// href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
									target="_blank"
									rel="noopener noreferrer"
								>
									{/* <i className="fas fa-play" /> */}
									Get a Quote
								</Button>
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
						<ProductSection />
						{/* <PortfolioSection /> */}
						<PortfolioSectionTabs />
						<ProcessesAndToolsSection />
						<PricingSectionTabs />
						<ClientSection />
						{/* <TeamSection /> */}
						<WorkSection />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(Bushido);
