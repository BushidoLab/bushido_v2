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

class BlogPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: this.props.location.state
		};
	}
	render() {
		const { classes, ...rest } = this.props;
		const { postIndex } = this.props.location.postIndex;
		console.log("this::::", this.props);

		const imgUrl =
		postIndex === 0
			? "http://localhost:2368" + this.state.posts.feature_image
			: this.state.posts.feature_image;

			
		return (
			<div>
				<Header color="transparent" fixed {...rest} />
				<br />
				<br />
				<BlogParallax json={this.state.posts}>
				<div className={classes.container} justify="center">
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justify="center"
						// style={{ minHeight: "100vh" }}
					>
						<BlogTitle json={this.state.posts} />
						</Grid>
				</div>
				</BlogParallax>

				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<div>
							<div className={classes.section}>
								<GridContainer justify="center">
									<GridItem cs={12} sm={12} md={10}>
										<h1 className={classes.blogTitle}>
											{this.state.posts.title}
										</h1>
										<ReactMarkdown
											className={classes.blogContent}
											escapeHtml={false}
											source={this.state.posts.html}
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
