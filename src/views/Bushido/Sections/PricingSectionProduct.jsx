import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Startup from "@material-ui/icons/FlightTakeoff";
import Enterprise from "@material-ui/icons/LocationCity";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
// import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
// import custom_crypto from "assets/img/bushido/custom_crypto.png";

import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Divider from "@material-ui/core/Divider";
// import CardMedia from "@material-ui/core/CardMedia";
import InfoAreaPricing from "components/InfoAreaPricing/InfoAreaPricing.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class PricingSectionProduct extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<div className={classes.container}>
					<div id="nav-tabs">
						<GridContainer>
							<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
								<Card>
									<CardContent className={classes.contentHeight}>
										<InfoAreaPricing
											title="Start Up"
											price="20,000"
											descriptionP1="Includes full stack implementation with deployment to a hosting platform"
											descriptionP2="Use of our internal libraries and components"
											descriptionP3="Priority maintenance. We provide the same engineers who worked on your product in the firstplace"
											descriptionP4="Length: 2 - 4 months"
											descriptionP5="Minimum Viable Product"
											descriptionP6="Landing Page. SEO ready (on-site optimisation). Deployed on our personal servers."
											icon={Startup}
											iconColor="danger"
											vertical
										/>
									</CardContent>
									<Divider />
									<CardFooter className={classes.cardFooter}>
										<Button color="danger" size="lg">
											Get started
										</Button>
									</CardFooter>
								</Card>
							</GridItem>
							<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
								<Card>
									<CardContent className={classes.contentHeight}>
										<InfoAreaPricing
											title="Enterprise"
											price="100,000"
											descriptionP1="Includes full stack enterprise infrastructure targeting high-load case."
											descriptionP2="Use of our internal libraries for every enterprise business product."
											descriptionP3="Full-stack devoted team that works exclusively on your project."
											descriptionP4="Team members can relocate temporarily on-demand."
											descriptionP5="Length: 6 months+"
											descriptionP6="Fully tested, bug free and functionality rich product"
											icon={Enterprise}
											iconColor="danger"
											vertical
										/>
									</CardContent>
									<Divider />
									<CardFooter className={classes.cardFooter}>
										<Button color="danger" size="lg">
											Get started
										</Button>
									</CardFooter>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(productStyle)(PricingSectionProduct);
