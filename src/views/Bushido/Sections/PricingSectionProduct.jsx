import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Startup from "@material-ui/icons/FlightTakeoff";
import Enterprise from "@material-ui/icons/LocationCity";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Divider from "@material-ui/core/Divider";
import InfoAreaPricing from "components/InfoAreaPricing/InfoAreaPricing.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import ScrollIntoView from "react-scroll-into-view";

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
											descriptionP1="Includes full stack implementation with deployment to a hosting platform."
											descriptionP2="Maintenance for upto 1-year included."
											descriptionP3="Length: 2 - 6 months."
											descriptionP4="Minimum Viable Product."
											descriptionP5="Collaboration and communication with in-house tech (if any)."
											descriptionP6="Landing Page. SEO ready (on-site optimisation). Deployed on our personal servers."
											icon={Startup}
											iconColor="danger"
											vertical
										/>
									</CardContent>
									<Divider />
									<CardFooter className={classes.cardFooter}>
										<ScrollIntoView alignToTop={true} selector={`#Contact`}>
											<Button color="danger" size="lg">
												Get started
											</Button>
										</ScrollIntoView>
									</CardFooter>
								</Card>
							</GridItem>
							<GridItem xs={12} sm={12} md={6} className={classes.cardPadding}>
								<Card>
									<CardContent className={classes.contentHeight}>
										<InfoAreaPricing
											title="Enterprise"
											price="80,000"
											descriptionP1="Includes full stack enterprise infrastructure architecture."
											descriptionP2="Developers and project management that work on your project exclusively."
											descriptionP3="Collaboration and communication with in-house tech."
											descriptionP4="Full agile sprint schedule"
											descriptionP5="Length: 6 months+"
											icon={Enterprise}
											iconColor="danger"
											vertical
										/>
									</CardContent>
									<Divider />
									<CardFooter className={classes.cardFooter}>
										<ScrollIntoView alignToTop={true} selector={`#Contact`}>
											<Button color="danger" size="lg">
												Get started
											</Button>
										</ScrollIntoView>
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
