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

class ProcessesAndToolsSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Processes and Tools</h2>
						<h5 className={classes.description}>
							These are some of the tools and processes we use here at Bushido.
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="Custom coins, tokens and contracts are our thing. We can tailor one to meet any requrements and have it out faster than you can say “HODL”"
								icon={Fingerprint}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We clearly explain the definition and difference between the two. We can help you decide which technology is best suited to your use case."
								icon={Fingerprint}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We deploy fast. We want to get your vision out there as soon as possible."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="Custom coins, tokens and contracts are our thing. We can tailor one to meet any requrements and have it out faster than you can say “HODL”"
								icon={Fingerprint}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We clearly explain the definition and difference between the two. We can help you decide which technology is best suited to your use case."
								icon={Fingerprint}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We deploy fast. We want to get your vision out there as soon as possible."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="Custom coins, tokens and contracts are our thing. We can tailor one to meet any requrements and have it out faster than you can say “HODL”"
								icon={Fingerprint}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We clearly explain the definition and difference between the two. We can help you decide which technology is best suited to your use case."
								icon={Fingerprint}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We deploy fast. We want to get your vision out there as soon as possible."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="Custom coins, tokens and contracts are our thing. We can tailor one to meet any requrements and have it out faster than you can say “HODL”"
								icon={Fingerprint}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We clearly explain the definition and difference between the two. We can help you decide which technology is best suited to your use case."
								icon={Fingerprint}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We deploy fast. We want to get your vision out there as soon as possible."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="Custom coins, tokens and contracts are our thing. We can tailor one to meet any requrements and have it out faster than you can say “HODL”"
								icon={Fingerprint}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We clearly explain the definition and difference between the two. We can help you decide which technology is best suited to your use case."
								icon={Fingerprint}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We deploy fast. We want to get your vision out there as soon as possible."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="Custom coins, tokens and contracts are our thing. We can tailor one to meet any requrements and have it out faster than you can say “HODL”"
								icon={Fingerprint}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We clearly explain the definition and difference between the two. We can help you decide which technology is best suited to your use case."
								icon={Fingerprint}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoArea
								title="Title"
								// description="We deploy fast. We want to get your vision out there as soon as possible."
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

export default withStyles(productStyle)(ProcessesAndToolsSection);
