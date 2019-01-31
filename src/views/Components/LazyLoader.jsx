import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridContainer from "components/Grid/GridContainer.jsx";
import Grid from "components/Grid/GridItem.jsx";

import bushido from "assets/img/bushido/circle_logo.png";
import bushido_logo from "assets/img/bushido/bushido2.png";
// import logoSVG from "logo.svg";
import { Fade } from "@material-ui/core";

const styles = theme => ({
	progress: {
		margin: theme.spacing.unit * 2
	},
	blackBackground: {
		backgroundColor: "black"
	},
	root: {
		color: "white"
	},
	loadPadding:{
		paddingTop: "20%"
	}
});

class CircularIndeterminate extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Fade in timeout={10}>
				<div className={classes.blackBackground}>
					<GridContainer>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
							className={classes.loadPadding}
						>
							<div
								style={{
									position: "relative",
									width: "200px",
									height: "200px"
								}}
							>
								<img
									style={{ position: "absolute", width: "200px" }}
									src={bushido}
									alt="Bushido circle logo"
								/>
								<div style={{ position: "absolute" }}>
									<CircularProgress
										percentage={20}
										textForPercentage={null}
										className={classes.root}
										size={200}
									/>
								</div>
							</div>
							<div
								style={{
									position: "relative",
									width: "200px",
									height: "500px",
									top: "20px"
								}}
							>
								<img
									style={{ position: "absolute", width: "200px" }}
									src={bushido_logo}
									alt="Bushido text logo"
								/>
							</div>
						</Grid>
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
