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
import BlogParallax from "components/Parallax/BlogParallax.jsx";
// import Grid from "components/Grid/Grid.jsx";
import Grid from "@material-ui/core/Grid";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import CircularIndeterminate from "../Components/LazyLoader.jsx";

// Sections for this page
import BlogPost from "./Sections/BlogPost.jsx";
import BlogTitle from "./Sections/BlogTitle.jsx";
import BlogList from "./Sections/BlogList.jsx";

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
		console.log(this.state.data);
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
						data: res.data,
						posts: res.data.posts,
						html: res.data.posts[0].html
					});
					console.log("res: ", res);
				}, 1000);
				setTimeout(() => {
					this.setState({ pageLoading: false });
				}, 1000);
			})
			.then(console.log(this.state.data));
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
					<BlogParallax json={this.state}>
						<div className={classes.container} justify="center">
							<Grid
								container
								spacing={0}
								direction="column"
								alignItems="center"
								justify="center"
								// style={{ minHeight: "100vh" }}
							>
								{/* <BlogTitle json={this.state} /> */}
							</Grid>
						</div>
					</BlogParallax>

					<div className={classNames(classes.main, classes.mainRaised)}>
						<div className={classes.container}>
							<div>
								{/* <BlogPost json={this.state} /> */}
								<BlogList json={this.state}/>
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
