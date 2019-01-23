import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import PortfolioSectionANON from "./PortfolioSectionANON.jsx";
import PortfolioSectionTUNE from "./PortfolioSectionTUNE.jsx";
import PortfolioSectionLVLBLOX from "./PortfolioSectionLVLBLOX.jsx";

function TabContainer({ children, dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		// width: 500
	}
});

class SectionTabs extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const { classes, theme } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="center" style={{ background: 'transparent', boxShadow: 'none'}}>
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						variant="standard"
						centered="true"
					>
						<Tab label="ANON" />
						<Tab label="Tune" />
						<Tab label="LEVEL BLOX" />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<PortfolioSectionANON />
					<PortfolioSectionTUNE />
					<PortfolioSectionLVLBLOX />
				</SwipeableViews>
			</div>
		);
	}
}

SectionTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SectionTabs);
