import React from "react";
// @material-ui/core components
import ReactMarkdown from "react-markdown/with-html";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import classNames from "classnames";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Grid from "@material-ui/core/Grid";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import BlogParallax from "components/Parallax/BlogParallax.jsx";
import BlogTitle from "./BlogTitle.jsx";
import axios from "axios";
const TOKEN = process.env.REACT_APP_AUTH_TOKEN
require('dotenv').config()

class BlogPost extends React.Component {
	state = {
		postObject: null
	};

	async getData() {
		const res = await axios.get(
			"http://localhost:2368/ghost/api/v0.1/posts?filter=slug:[" +
				this.props.match.params.slug +
				"]",
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					Authorization:
					"Bearer " + TOKEN,
					"cache-control": "no-cache"
				}
			}
		);
		return res.data.posts;
	}
	

	componentDidMount() {
		if (!this.state.postObject) {
			this.getData()
				.then(response => this.setState({ postObject: response }))
				.catch(err => {
					console.log("There was an error calling from the API");
				});
		}
	}

	render() {
		const { classes, ...rest } = this.props;
		const imgUrl =
			this.state.postObject != null
				? "http://localhost:2368" + this.state.postObject[0].feature_image
				: " ";
		const blogTitle =
			this.state.postObject != null ? this.state.postObject[0].title : " ";
		const blogContent =
			this.state.postObject != null ? this.state.postObject[0].html : " ";

		return (
			<div>
				<Header color="transparent" fixed {...rest} />
				<br />
				<br />
				<BlogParallax json={this.state.postObject} imgUrl={imgUrl}>
					<div className={classes.container} justify="center">
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="center"
							justify="center"
							// style={{ minHeight: "100vh" }}
						>
							<BlogTitle json={blogTitle} />
						</Grid>
					</div>
				</BlogParallax>

				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<div>
							<div className={classes.section}>
								<GridContainer justify="center">
									<GridItem cs={12} sm={12} md={10}>
										<h1 className={classes.blogTitle}>{blogTitle}</h1>
										<ReactMarkdown
											className={classes.blogContent}
											escapeHtml={false}
											source={blogContent}
										/>
									</GridItem>
								</GridContainer>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(BlogPost);
