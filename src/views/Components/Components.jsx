import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Header
					brand="The Bushido Lab"
					rightLinks={<HeaderLinks />}
					fixed
					color="transparent"
					changeColorOnScroll={{
						height: 400,
						color: "white"
					}}
					{...rest}
				/>
				<Parallax image={require("assets/img/bg7.png")}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem>
								<div className={classes.brand}>
									<h1 className={classes.title}>Blockchain Development,</h1>
									<br />
									<h1 className={classes.title}>Simplified</h1>
									<h3 className={classes.subtitle}>
										A Badass Material-UI Kit based on Material Design.
									</h3>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>

				<div className={classNames(classes.main, classes.mainRaised)}>
					<SectionBasics />
					<SectionNavbars />
					<SectionTabs />
					<SectionPills />
					<SectionNotifications />
					<SectionTypography />
					<SectionJavascript />
					<SectionCarousel />
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(componentsStyle)(Components);
