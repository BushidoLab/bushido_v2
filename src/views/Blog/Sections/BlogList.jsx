import React from "react";
// @material-ui/core components
import ReactMarkdown from "react-markdown/with-html";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class BlogList extends React.Component {
	render() {
		const { classes } = this.props;
		const { postIndex } = this.props;
		const htmlTitle = this.props.json.data.posts[postIndex]
			? this.props.json.data.posts[postIndex].title
			: this.props.json.data.loading;

		const htmlDescription = this.props.json.data.posts[postIndex]
			? this.props.json.data.posts[postIndex].custom_excerpt
			: this.props.json.data.loading;

			
		// var imgUrl = this.props.json.data.posts[postIndex]
		// 	? "http://localhost:2368" + this.props.json.data.posts[postIndex].feature_image
		// 	: this.props.json.data.loading;

		const imgUrl = postIndex === 0 ? "http://localhost:2368" + this.props.json.data.posts[postIndex].feature_image : this.props.json.data.posts[postIndex].feature_image

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia className={classes.media} image={imgUrl} />
					<CardContent>
						<h3 className={classes.cardTitle}>{htmlTitle} ({postIndex})</h3>
						<Typography component="p">{htmlDescription}</Typography>

					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(workStyle)(BlogList);
