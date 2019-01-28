import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Typing, { Backspace, Delay, Reset, Speed } from "react-typing-animation";

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
import WorkSection from "./Sections/WorkSection.jsx";
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
				<br />
				<br />
				<div className={classes.container} justify="center">
					{/* <GridContainer> */}
					{/* <GridItem xs={12} sm={12} md={12}> */}
					<WorkSection />
					{/* </GridItem> */}
					{/* </GridContainer> */}
				</div>

				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(Bushido);
