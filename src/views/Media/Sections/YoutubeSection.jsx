import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import mediaPageStyle from "assets/jss/material-kit-react/views/mediaPageStyle.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import YouTube from "react-youtube";

class YoutubeSection extends React.Component {
	render() {
		const { classes } = this.props;
		const opts = {
			// margin: '20px',
			// width: "100%",
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 0, // disable auto playing
				modestbranding: 1 // remove youtube logo from bottom section
			}
		};
		return (
			<GridContainer>
				<GridItem xs={6} sm={6} md={6}>
					<YouTube
						videoId="x53y7xwrT6s"
						opts={opts}
						onReady={this._onReady}
						className={classes.youtubeVideo}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<YouTube
						videoId="5icJhr0FeEU"
						opts={opts}
						onReady={this._onReady}
						className={classes.youtubeVideo}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<YouTube
						videoId="yydSbTXLUro"
						opts={opts}
						onReady={this._onReady}
						className={classes.youtubeVideo}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<YouTube
						videoId="rSBNQoXpxF8"
						opts={opts}
						onReady={this._onReady}
						className={classes.youtubeVideo}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<YouTube
						videoId="HG2DbcHw7JA"
						opts={opts}
						onReady={this._onReady}
						className={classes.youtubeVideo}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<YouTube
						videoId="3C43yRArsgI"
						opts={opts}
						onReady={this._onReady}
						className={classes.youtubeVideo}
					/>
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(mediaPageStyle)(YoutubeSection);
