import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>
							We craft top quality solutions for you.
						</h2>
						<h5 className={classes.description}>
							This is the paragraph where you can write more details about your
							product. Keep you user engaged by providing meaningful
							information. Remember that by this time, the user is curious,
							otherwise he wouldn't scroll to get here. Add a button if you want
							the user to see more.
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Custom Cryptocurrencies"
								description="Custom coins, tokens and contracts are our thing. We can tailor one to meet any requrements and have it out faster than you can say “HODL”"
								icon={Chat}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Utility and Security Tokens"
								description="We clearly explain the definition and difference between the two. We can help you decide which technology is best suited to your use case."
								icon={VerifiedUser}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Smart Contracts and dApps"
								description="We deploy fast. We want to get your vision out there as soon as possible."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(productStyle)(ProductSection);
