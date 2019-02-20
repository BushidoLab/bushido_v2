import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { title } from "bushido_v2/src/assets/jss/material-kit-react.jsx";
import PricingSectionProduct from "bushido_v2/src/Bushido/SectionsPricingSectionProduct.jsx";
import PricingSectionConsultation from "bushido_v2/src/Bushido/SectionsPricingSectionConsultation.jsx";

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
	},
	indicator: {
		textColor: "#000"
	}
});

class PricingSectionTabs extends React.Component {
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
			<div className={classes.root} id="Pricing">
				<h2 className={classes.title}>Pricing Plans</h2>
				<h5 className={classes.description}>Pricing is as follows:</h5>
				<AppBar
					position="relative"
					style={{ background: "transparent", boxShadow: "none" }}
				>
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						style={{ color: "black" }}
						TabIndicatorProps={{
							style: {
								backgroundColor: "#EE272B"
							}
						}}
						variant="fullWidth"
						centered={true}
					>
						<Tab label="Development" />
						<Tab label="Consultation" />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<PricingSectionProduct />
					<PricingSectionConsultation />
				</SwipeableViews>
			</div>
		);
	}
}

PricingSectionTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PricingSectionTabs);
