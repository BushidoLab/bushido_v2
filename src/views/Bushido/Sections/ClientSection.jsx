import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

// import team1 from "assets/img/faces/avatar.jpg";
// import team2 from "assets/img/faces/christian.jpg";
// import team3 from "assets/img/faces/kendall.jpg";
import client_anon from "assets/img/clients/anon_logo.png";
import client_ibm from "assets/img/clients/ibm_logo.png";
import client_oracle from "assets/img/clients/oracle_logo.png";
import client_um from "assets/img/clients/um_logo.png";
import client_vera from "assets/img/clients/vera_logo.png";

class ClientSection extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(classes.imgCardCentered);
		// classes.imgRaised,
		// classes.imgRoundedCircle,
		// classes.imgFluid
		return (
			<div className={classes.section}>
				<h2 className={classes.title}>Some of our Clients</h2>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={client_anon} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Anonymous Bitcoin
									<br />
									<small className={classes.smallTitle}>Crypto Currency</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members.
										You can give more details about what they do. Feel free to
										add some <a href="#pablo">links</a> for people to be able to
										follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-twitter"} />
									</Button>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-instagram"} />
									</Button>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-facebook"} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={client_oracle} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Java Oracle
									<br />
									<small className={classes.smallTitle}>
										Product Licencing
									</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members.
										You can give more details about what they do. Feel free to
										add some <a href="#pablo">links</a> for people to be able to
										follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-twitter"} />
									</Button>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-linkedin"} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={client_ibm} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									IBM
									<br />
									<small className={classes.smallTitle}>
										Hardware Chipsets
									</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members.
										You can give more details about what they do. Feel free to
										add some <a href="#pablo">links</a> for people to be able to
										follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-twitter"} />
									</Button>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-instagram"} />
									</Button>
									<Button
										justIcon
										color="transparent"
										className={classes.margin5}
									>
										<i className={classes.socials + " fab fa-facebook"} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(teamStyle)(ClientSection);
