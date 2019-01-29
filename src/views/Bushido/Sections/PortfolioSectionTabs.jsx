import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { title } from "assets/jss/material-kit-react.jsx";
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
		padding: "70px 0"
		// width: 500
	},
	title: {
		...title,
		textAlign: "center",
		marginBottom: "1rem",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none"
	},
	description: {
		textAlign: "center",
		color: "#545454",
		marginBottom: "30px"
	}
});

class PortfolioSectionTabs extends React.Component {
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
				<h2 className={classes.title}>Portfolio</h2>
				<h5 className={classes.description}>Just a few of our projects</h5>
				<AppBar
					position="center"
					style={{ background: "transparent", boxShadow: "none" }}
				>
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						textColor="#000"
						TabIndicatorProps={{
							style: {
								backgroundColor: "#EE272B"
							}
						}}
						variant="fullWidth"
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

PortfolioSectionTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PortfolioSectionTabs);
