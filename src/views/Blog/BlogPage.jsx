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
import BlogPost from "./Sections/BlogPost.jsx";
import BlogTitle from "./Sections/BlogTitle.jsx";
import BlogList from "./Sections/BlogList.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


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
		// console.log("BLOGPAGE STATE:", this.state.data);
		axios
			.get(
				"http://localhost:2368/ghost/api/v0.1/posts/?client_id=ghost-admin&client_secret=e2dc5e7cf8e2",
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						Authorization:
							"Bearer AYnGjHA86Np8p0sOfHl7qcXj0452zq5UP8aH8SGY66QNPPezx5OE1kq4nknP7hEjjOW2frHqVlvAeyARR0Q04U9XOggD2ZpPpcIJA5rDStil3SEk48BcPVlrVzBqi5YcUanzd0bSypiSauDB2GqzB7OLLVONsiRqLVAf7qQVNIL2BPuDMBNT4aZidivikqj",
						"cache-control": "no-cache"
					}
				}
			)
			.then(res => {
				setTimeout(() => {
					this.setState({
						data: res.data.posts
					});
					// console.log("RES.DATA: ", res.data.posts);
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
			// console.log("state BLOGPAGE:", this.state);
			return (
				<div>
					<Header color="transparent" fixed {...rest} />
					<br />
					<br />
					<Parallax filter image={require("assets/img/land.png")}>
					<div className={classes.container} justify="center">
							<GridContainer>
								<GridItem xs={12} sm={12} md={8}>
									<h1 className={classes.title}>
										Bushido Blogs
									</h1>
								</GridItem>
							</GridContainer>
						</div>
					</Parallax>

					<div className={classNames(classes.main, classes.mainRaised)}>
						<div className={classes.container}>
							<div>
								{/* <BlogPost json={this.state} /> */}
								<Grid container spacing={16}>
									<Grid item xs={12} sm={12} md={4}>
										<BlogList json={this.state} postIndex={0} />
									</Grid>
									<Grid item xs={12} sm={12} md={4}>
										<BlogList json={this.state} postIndex={1} />
									</Grid>
									<Grid item xs={12} sm={12} md={4}>
										<BlogList json={this.state} postIndex={2} />
									</Grid>
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
