import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import InfoArea from "components/InfoArea/InfoArea.jsx";
import InfoAreaImage from "components/InfoAreaImage/InfoAreaImage.jsx";
import tech_0x from "assets/img/tech/0x.png";
import tech_graphql from "assets/img/tech/graphql.png"
import tech_html5 from "assets/img/tech/html5.png"
import tech_js from "assets/img/tech/js.png"
import tech_lightning from "assets/img/tech/lightning.png"
import tech_react from "assets/img/tech/react.png"
import tech_amazon from "assets/img/tech/amazon.png"
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
							<InfoAreaImage
								title="0x Protocol"
								imgSrc={tech_0x}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="GraphQL"
								imgSrc={tech_graphql}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="HTML5"
								imgSrc={tech_html5}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="Javascript"
								imgSrc={tech_js}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="Bitcoin Lightning"
								imgSrc={tech_lightning}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="React"
								imgSrc={tech_react}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="AWS"
								imgSrc={tech_amazon}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="0x Protocol"
								imgSrc={tech_0x}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="GraphQL"
								imgSrc={tech_graphql}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="HTML5"
								imgSrc={tech_html5}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="Javascript"
								imgSrc={tech_js}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="Bitcoin Lightning"
								imgSrc={tech_lightning}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="React"
								imgSrc={tech_react}
								vertical
							/>
						</GridItem>
						<GridItem xs={4} sm={3} md={2}>
							<InfoAreaImage
								title="AWS"
								imgSrc={tech_amazon}
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
