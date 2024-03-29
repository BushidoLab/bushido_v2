import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import axios from "axios";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// import Grid from "components/Grid/Grid.jsx";
import Grid from "@material-ui/core/Grid";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import CircularIndeterminate from "../Components/LazyLoader.jsx";

// Sections for this page
import BlogList from "./Sections/BlogList.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
const API_URL = "https://b.bushidolab.com/";
// require("dotenv").config();

class Bushido extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageLoading: true,
			readyToFadeOut: false,
			data: { loading: "Loading.....", posts: { id: null, html: "Loading" } }
		};
	}

	updateFadeState = () => {
		this.setState({ readyToFadeOut: true });
	};

	componentDidMount() {
		axios
			.get(API_URL, {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					"cache-control": "no-cache"
				}
			})
			.then(res => {
				setTimeout(() => {
					this.setState({
						data: res.data
					});
				}, 1000);
				setTimeout(() => {
					this.setState({ pageLoading: false });
				}, 1000);
			});
	}

	render() {
		const { classes, ...rest } = this.props;

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
									<h1 className={classes.title}>Bushido Blogs</h1>
								</GridItem>
							</GridContainer>
						</div>
					</Parallax>

					<div className={classNames(classes.main, classes.mainRaised)}>
						<div className={classes.container}>
							<div>
								<Grid container spacing={16}>
									{this.state.data.map(function(item, i) {
										return (
											<Grid item xs={12} sm={6} md={4} key={i}>
												<BlogList json={item} />
											</Grid>
										);
									})}
								</Grid>
							</div>
						</div>
					</div>

					<Footer />
				</div>
			);
		}
	}
}

export default withStyles(landingPageStyle)(Bushido);
