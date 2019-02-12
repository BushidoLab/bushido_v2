import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class BlogTitle extends React.Component {
	render() {
		const { classes } = this.props;
		const htmlTitle = this.props.json.data.posts[0]
			? this.props.json.data.posts[0].title
			: this.props.json.data.loading;

		const postAuthor = this.props.json.data.posts[0]
			? this.props.json.data.posts[0].author
			: this.props.json.data.loading;
		return (
			<div className={classes.section}>
				<GridItem xs={12} sm={12} md={12}>
					<h1 className={classes.blogTitle}>{htmlTitle}</h1>
					<div className={classes.authorDescription}> {postAuthor === "1" ? "By SAM ABBASSI" : "Loading"}</div>
				</GridItem>
			</div>
		);
	}
}

export default withStyles(workStyle)(BlogTitle);
