import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';


// @material-ui/icons

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
import ScrollIntoView from 'react-scroll-into-view';


import CircularIndeterminate from "../Components/LazyLoader.jsx"
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
		this.setState({readyToFadeOut:true})
	}
	
	componentDidMount = () => {
		// this.alertMounted();
		setTimeout(() => {
			console.log("Setting State", this.state);
			this.setState({pageLoading: false});
		}, 500)
	}

	render() {
		console.log("Component Rendered", this.state)

		const { classes, ...rest } = this.props;
		
		if (this.state.pageLoading) {
			return(<CircularIndeterminate classes={classes} rest={rest} updateFadeState={this.updateFadeState}></CircularIndeterminate>)
		} else {
			return(<LandingPage classes={classes} rest={rest} />)
		}

		// return (	
		// 	this.pageLoading ? <CircularIndeterminate></CircularIndeterminate> : <LandingPage classes={classes} rest={rest} />
		// );

	}
}

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<Fade in timeout={2000}>
			<div className = {classes.fadeIn}>
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
							<Button
								color="danger"
								size="lg"
								href="/contact"
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
					<div id="Processes">
						<ProcessesAndToolsSection />
					</div>
					{/* <div> */}
					<PricingSectionTabs />
					{/* </div> */}
					<ClientSection />
					<PricingSectionTabs />
					{/* <TeamSection /> */}
					<WorkSection />
				</div>
			</div>
			<Footer />
		</div>
		</Fade>
		)
	}
}


export default withStyles(landingPageStyle)(Bushido);
