import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import PortfolioSectionANON from "./PortfolioSectionANON.jsx";
import PortfolioSectionTUNE from "./PortfolioSectionTUNE.jsx";
import PortfolioSectionLVLBLOX from "./PortfolioSectionLVLBLOX.jsx";
class SectionTabs extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<div className={classes.container}>
					<div id="nav-tabs">
						<h3>Navigation Tabs</h3>
						<GridContainer>
							<GridItem xs={12} sm={12} md={12}>
								<h3>
									<small>Tabs with Icons on Card</small>
								</h3>
								<CustomTabs
									headerColor="danger"
									tabs={[
										{
											tabName: "ANON",
											tabIcon: Face,
											tabContent: <PortfolioSectionANON />
										},
										{
											tabName: "TUNE",
											tabIcon: Chat,
											tabContent: <PortfolioSectionTUNE />
										},
										{
											tabName: "LVL BLOX",
											tabIcon: Build,
											tabContent: <PortfolioSectionLVLBLOX />
										}
									]}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(tabsStyle)(SectionTabs);
