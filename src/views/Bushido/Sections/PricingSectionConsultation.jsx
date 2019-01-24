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
											title="Executive Training"
											price="4,000"
											descriptionP1="Full support over phone and email."
											descriptionP2="Access to shared recources."
											descriptionP3="In office training for small teams."
											descriptionP4="Length: 2 - 4 months."
											descriptionP5="Certification from Bushido."
											descriptionP6="Avaliable 2019."
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
											title="Technical Planning"
											price="10,000"
											descriptionP1="Full support over phone and email."
											descriptionP2="Detailed use cases and producty lifecycles."
											descriptionP3="On site development."
											descriptionP4="Team members can relocate temporarily on-demand."
											descriptionP5="Length: 2 months+"
											descriptionP6="White papers, Token Design, Concensus."
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
