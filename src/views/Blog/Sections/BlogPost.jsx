import React from "react";
// @material-ui/core components
import ReactMarkdown from "react-markdown/with-html";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class BlogPost extends React.Component {
	render() {
		const { classes } = this.props;
		const htmlTitle = this.props.json.data.posts[0]
			? this.props.json.data.posts[0].title
			: this.props.json.data.loading;

		const htmlBody = this.props.json.data.posts[0]
			? this.props.json.data.posts[0].html
			: this.props.json.data.loading;

		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem cs={12} sm={12} md={8}>
						<h2 className={classes.title}>{htmlTitle}</h2>
						<ReactMarkdown
							className={classes.description}
							escapeHtml={false}
							source={htmlBody}
						/>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(workStyle)(BlogPost);
