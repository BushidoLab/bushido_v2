import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
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
import ScrollIntoView from "react-scroll-into-view";

import CircularIndeterminate from "../Components/LazyLoader.jsx";
import { Fade } from "@material-ui/core";

class Bushido extends React.Component {
	constructor(props) {
		super(props);
		// we use this to make the card to appear after the page has been rendered
		this.state = {
			pageLoading: true,
			readyToFadeOut: false
		};
	}

	updateFadeState = () => {
		this.setState({ readyToFadeOut: true });
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ pageLoading: false });
		}, 2000);
	};

	render() {
		const { classes, ...rest } = this.props;

		if (this.state.pageLoading) {
			return <CircularIndeterminate updateFadeState={this.updateFadeState} />;
		} else {
			return <LandingPage classes={classes} rest={rest} />;
		}
	}
}

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<Fade in timeout={1000}>
				<div className={classes.fadeIn}>
					<Header color="transparent" fixed {...rest} />
					<Parallax filter image={require("assets/img/land.png")}>
						<div className={classes.container}>
							<GridContainer>
								<GridItem xs={12} sm={12} md={8}>
									<h1 className={classes.title}>
										Blockchain <br />
										Development. Simplified.
									</h1>
									<br />
									<ScrollIntoView alignToTop={true} selector={`#Contact`}>
										<Button
											variant="contained"
											size="lg"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.quoteButton}
										>
											Get a Quote
										</Button>
									</ScrollIntoView>
								</GridItem>
							</GridContainer>
						</div>
					</Parallax>

					<div className={classNames(classes.main, classes.mainRaised)}>
						<div className={classes.container}>
							<div id="Services">
								<ProductSection />
							</div>
							<div id="Portfolio">
								<PortfolioSectionTabs />
							</div>
							<div id="Processes">
								<ProcessesAndToolsSection />
							</div>
							<PricingSectionTabs />
							<ClientSection />
							<PricingSectionTabs />
							<WorkSection />
						</div>
					</div>
					<Footer />
				</div>
			</Fade>
		);
	}
}

export default withStyles(landingPageStyle)(Bushido);
