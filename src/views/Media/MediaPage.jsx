import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// import Grid from "components/Grid/Grid.jsx";

import mediaPageStyle from "assets/jss/material-kit-react/views/mediaPageStyle.jsx";
import CircularIndeterminate from "../Components/LazyLoader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { title } from "assets/jss/material-kit-react.jsx";


import YoutubeSection from "./Sections/YoutubeSection.jsx";
import TwitterSection from "./Sections/TwitterSection.jsx";
import InstagramSection from "./Sections/InstagramSection.jsx";

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
	}
});

class MediaPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageLoading: true,
			readyToFadeOut: false,
			value: 0
		};
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	updateFadeState = () => {
		this.setState({ readyToFadeOut: true });
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ pageLoading: false });
		}, 1000);
	}
	handleClose = () => {
		this.props.onClose(this.props.selectedValue);
	};

	handleListItemClick = value => {
		this.props.onClose(value);
	};

	render() {
		const { classes, theme, ...rest } = this.props;

		if (this.state.pageLoading) {
			return <CircularIndeterminate updateFadeState={this.updateFadeState} />;
		} else {
			return (
				<div>
					<Header color="transparent" fixed {...rest} />
					<br />
					<br />
					<Parallax filter image={require("assets/img/land.png")}>
						<div className={classes.container} justify="center">
							<GridContainer>
								<GridItem xs={12} sm={12} md={8}>
									<h1>Bushido Media Section</h1>
								</GridItem>
							</GridContainer>
						</div>
					</Parallax>
					<div className={classNames(classes.main, classes.mainRaised)}>
						<div className={classes.container}>
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
									<Tab label="YouTube" />
									<Tab label="Twitter" />
									<Tab label="Instagram" />
								</Tabs>
							</AppBar>
							<SwipeableViews
								index={this.state.value}
								onChangeIndex={this.handleChangeIndex}
							>
								<YoutubeSection />
								<TwitterSection />
								<InstagramSection />
							</SwipeableViews>
						</div>
					</div>
					<Footer />
				</div>
			);
		}
	}
	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
}

MediaPage.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(mediaPageStyle)(MediaPage);
