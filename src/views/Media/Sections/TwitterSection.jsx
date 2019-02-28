import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import mediaPageStyle from "assets/jss/material-kit-react/views/mediaPageStyle.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import { TwitterTweetEmbed } from "react-twitter-embed";

class TwitterSection extends React.Component {
	render() {
		return (
			<GridContainer>
				<GridItem xs={6} sm={6} md={6}>
					<TwitterTweetEmbed tweetId={"950437015010594817"} />
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<TwitterTweetEmbed tweetId={"1086384601893728256"} />
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<TwitterTweetEmbed tweetId={"1086673659782156288"} />
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<TwitterTweetEmbed tweetId={"1095355393113538561"} />
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<TwitterTweetEmbed tweetId={"1093953642653192192"} />
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<TwitterTweetEmbed tweetId={"1086324885230682112"} />
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(mediaPageStyle)(TwitterSection);
