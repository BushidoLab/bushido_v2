import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import workStyle from "bushido_v2/src/assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import { Link } from "react-router-dom";
class BlogList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: this.props.json.data
		};
	}
	render() {
		const { classes } = this.props;
		const { postIndex } = this.props;
		const allPosts = this.state.posts;

		const htmlTitle = allPosts[postIndex]
			? allPosts[postIndex].title
			: this.props.json.data.loading;

		const htmlDescription = allPosts[postIndex]
			? allPosts[postIndex].custom_excerpt
			: this.props.json.data.loading;

		const slug = allPosts[postIndex]
			? "/blogpost/" + allPosts[postIndex].slug
			: this.props.json.data.loading;

		const imgUrl = "http://localhost:2368" + allPosts[postIndex].feature_image

		return (
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia className={classes.media} image={imgUrl} />
					<CardContent>
						<h3 className={classes.cardTitle}>
							{htmlTitle}
						</h3>
						<Typography component="p">{htmlDescription}</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="large" color="primary">
						<Link to={{ pathname: slug, state: allPosts[postIndex]}}>
							READ NOW!
						</Link>
					</Button>

				</CardActions>
			</Card>
		);
	}
}

export default withStyles(workStyle)(BlogList);
