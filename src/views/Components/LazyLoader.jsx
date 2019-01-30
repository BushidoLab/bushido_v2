import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import logoSVG from "logo.svg";
import { Fade } from "@material-ui/core";

const styles = theme => ({
	progress: {
		margin: theme.spacing.unit * 2
	},
	blackBackground: {
		backgroundColor: "black"
	},
	root: {
		color: "red",
		svg: logoSVG,
		marginTop: "50%"
	},
	centered: {
		height: "100vh",
		justify: "center",
		alignItems: "center",
		direction: "column",
		marginTop: "30%",
		paddingLeft: "50%"
	}
});

class CircularIndeterminate extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Fade in timeout={500}>
				<div className={classes.blackBackground}>
					<GridContainer
						justify="center"
						alignItems="center"
						direction="column"
					>
						<GridItem className={classes.centered}>
							<CircularProgress
								alignitems="center"
								justify="center"
								direction="column"
								className={classes.root}
							/>
						</GridItem>
					</GridContainer>
				</div>
			</Fade>
		);
	}
}

CircularIndeterminate.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
