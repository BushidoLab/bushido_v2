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
		console.log('THIS:', this)
		const htmlTitle = this.props.json.title

		const postAuthor = this.props.json.author
		return (
			<div className={classes.section}>
				<GridItem xs={12} sm={12} md={12}>
					<h1>{htmlTitle}</h1>
					<div className={classes.authorDescription}> {postAuthor === "1" ? "By SAM ABBASSI" : "Loading"}</div>
				</GridItem>
			</div>
		);
	}
}

export default withStyles(workStyle)(BlogTitle);
