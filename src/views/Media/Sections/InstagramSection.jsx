import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import mediaPageStyle from "assets/jss/material-kit-react/views/mediaPageStyle.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import InstagramEmbed from "react-instagram-embed";

class InstagramSection extends React.Component {
	render() {
		return (
			<GridContainer>
				<GridItem xs={6} sm={6} md={6}>
					<InstagramEmbed
						url="https://www.instagram.com/p/BfTxWD-H5of/"
						maxWidth={'100%'}
						hideCaption={false}
						containerTagName="div"
						// protocol=""
						// injectScript
						// onLoading={() => {}}
						// onSuccess={() => {}}
						// onAfterRender={() => {}}
						// onFailure={() => {}}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<InstagramEmbed
						url="https://www.instagram.com/p/BfPYtd1nyAm/"
						maxWidth={'100%'}
						hideCaption={false}
						containerTagName="div"
						// protocol=""
						// injectScript
						// onLoading={() => {}}
						// onSuccess={() => {}}
						// onAfterRender={() => {}}
						// onFailure={() => {}}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<InstagramEmbed
						url="https://www.instagram.com/p/BfOqSbrH44S/"
						maxWidth={'100%'}
						hideCaption={false}
						containerTagName="div"
						// protocol=""
						// injectScript
						// onLoading={() => {}}
						// onSuccess={() => {}}
						// onAfterRender={() => {}}
						// onFailure={() => {}}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<InstagramEmbed
						url="https://www.instagram.com/p/BfM7K_xnJzt/"
						maxWidth={'100%'}
						hideCaption={false}
						containerTagName="div"
						// protocol=""
						// injectScript
						// onLoading={() => {}}
						// onSuccess={() => {}}
						// onAfterRender={() => {}}
						// onFailure={() => {}}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<InstagramEmbed
						url="https://www.instagram.com/p/BfMktuengfy/"
						maxWidth={'100%'}
						hideCaption={false}
						containerTagName="div"
						// protocol=""
						// injectScript
						// onLoading={() => {}}
						// onSuccess={() => {}}
						// onAfterRender={() => {}}
						// onFailure={() => {}}
					/>
				</GridItem>
				<GridItem xs={6} sm={6} md={6}>
					<InstagramEmbed
						url="https://www.instagram.com/p/BfMTDihn4wX/"
						maxWidth={'100%'}
						hideCaption={false}
						containerTagName="div"
						// protocol=""
						// injectScript
						// onLoading={() => {}}
						// onSuccess={() => {}}
						// onAfterRender={() => {}}
						// onFailure={() => {}}
					/>
				</GridItem>
			</GridContainer>
		);
	}
}

export default withStyles(mediaPageStyle)(InstagramSection);
