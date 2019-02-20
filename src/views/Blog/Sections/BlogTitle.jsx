import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridItem from "bushido_v2/src/components/Grid/GridItem.jsx";

import workStyle from "bushido_v2/src/assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class BlogTitle extends React.Component {
	render() {
		const { classes } = this.props;
		const htmlTitle = this.props.json != null ? this.props.json : " ";

		const postAuthor = this.props.json != null ? this.props.json : " ";


		return (
			<div className={classes.section}>
				<GridItem xs={12} sm={12} md={12}>
					<h1>{htmlTitle}</h1>
					<div className={classes.authorDescription}> {postAuthor === "1" ? "By SAM ABBASSI" : " "}</div>
				</GridItem>
			</div>
		);
	}
}

export default withStyles(workStyle)(BlogTitle);
