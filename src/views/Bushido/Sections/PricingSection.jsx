// import React from "react";

// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";

// // @material-ui/icons
// import Face from "@material-ui/icons/Face";
// import Chat from "@material-ui/icons/Chat";
// import Build from "@material-ui/icons/Build";
// // core components
// import GridContainer from "components/Grid/GridContainer.jsx";
// import GridItem from "components/Grid/GridItem.jsx";
// import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
// import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

// class PricingSection extends React.Component {
// 	render() {
// 		const { classes } = this.props;
// 		return (
// 			<div className={classes.section}>
// 				<div className={classes.container}>
// 					<div id="nav-tabs">
// 						<GridContainer justify="center">
// 							<GridItem xs={12} sm={12} md={8}>
// 								<h2 className={classes.title}>Development Pricing Plans</h2>
// 								<h5 className={classes.description}>
// 									These are some of the tools and processes we use here at
// 									Bushido.
// 								</h5>
// 							</GridItem>
// 						</GridContainer>
// 						<GridContainer>
// 							<GridItem xs={12} sm={12} md={6}>
// 								<h3>
// 									<small>Tabs with Icons on Card</small>
// 								</h3>
// 								<CustomTabs
// 									headerColor="primary"
// 									tabs={[
// 										{
// 											tabName: "Profile",
// 											tabIcon: Face,
// 											tabContent: (
// 												<p className={classes.textCenter}>
// 													I think that’s a responsibility that I have, to push
// 													possibilities, to show people, this is the level that
// 													things could be at. So when you get something that has
// 													the name Kanye West on it, it’s supposed to be pushing
// 													the furthest possibilities. I will be the leader of a
// 													company that ends up being worth billions of dollars,
// 													because I got the answers. I understand culture. I am
// 													the nucleus.
// 												</p>
// 											)
// 										},
// 										{
// 											tabName: "Messages",
// 											tabIcon: Chat,
// 											tabContent: (
// 												<p className={classes.textCenter}>
// 													I think that’s a responsibility that I have, to push
// 													possibilities, to show people, this is the level that
// 													things could be at. I will be the leader of a company
// 													that ends up being worth billions of dollars, because
// 													I got the answers. I understand culture. I am the
// 													nucleus. I think that’s a responsibility that I have,
// 													to push possibilities, to show people, this is the
// 													level that things could be at.
// 												</p>
// 											)
// 										},
// 										// {
// 										// 	tabName: "Settings",
// 										// 	tabIcon: Build,
// 										// 	tabContent: (
// 										// 		<p className={classes.textCenter}>
// 										// 			think that’s a responsibility that I have, to push
// 										// 			possibilities, to show people, this is the level that
// 										// 			things could be at. So when you get something that has
// 										// 			the name Kanye West on it, it’s supposed to be pushing
// 										// 			the furthest possibilities. I will be the leader of a
// 										// 			company that ends up being worth billions of dollars,
// 										// 			because I got the answers. I understand culture. I am
// 										// 			the nucleus.
// 										// 		</p>
// 										// 	)
// 										// }
// 									]}
// 								/>
// 							</GridItem>
// 							<GridItem xs={12} sm={12} md={6}>
// 								<h3>
// 									<small>Tabs with Icons on Card</small>
// 								</h3>
// 								<CustomTabs
// 									headerColor="primary"
// 									tabs={[
// 										{
// 											tabName: "Profile",
// 											tabIcon: Face,
// 											tabContent: (
// 												<p className={classes.textCenter}>
// 													I think that’s a responsibility that I have, to push
// 													possibilities, to show people, this is the level that
// 													things could be at. So when you get something that has
// 													the name Kanye West on it, it’s supposed to be pushing
// 													the furthest possibilities. I will be the leader of a
// 													company that ends up being worth billions of dollars,
// 													because I got the answers. I understand culture. I am
// 													the nucleus.
// 												</p>
// 											)
// 										},
// 										{
// 											tabName: "Messages",
// 											tabIcon: Chat,
// 											tabContent: (
// 												<p className={classes.textCenter}>
// 													I think that’s a responsibility that I have, to push
// 													possibilities, to show people, this is the level that
// 													things could be at. I will be the leader of a company
// 													that ends up being worth billions of dollars, because
// 													I got the answers. I understand culture. I am the
// 													nucleus. I think that’s a responsibility that I have,
// 													to push possibilities, to show people, this is the
// 													level that things could be at.
// 												</p>
// 											)
// 										},
// 										{
// 											tabName: "Settings",
// 											tabIcon: Build,
// 											tabContent: (
// 												<p className={classes.textCenter}>
// 													think that’s a responsibility that I have, to push
// 													possibilities, to show people, this is the level that
// 													things could be at. So when you get something that has
// 													the name Kanye West on it, it’s supposed to be pushing
// 													the furthest possibilities. I will be the leader of a
// 													company that ends up being worth billions of dollars,
// 													because I got the answers. I understand culture. I am
// 													the nucleus.
// 												</p>
// 											)
// 										}
// 									]}
// 								/>
// 							</GridItem>
// 						</GridContainer>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default withStyles(tabsStyle)(PricingSection);
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";


import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	toolbarTitle: {
		flex: 1
	},
	layout: {
		width: "auto",
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
			width: 900,
			marginLeft: "auto",
			marginRight: "auto"
		}
	},
	heroContent: {
		maxWidth: 600,
		margin: "0 auto",
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
	},
	cardHeader: {
		// backgroundColor: theme.palette.grey[200],
	},
	cardPricing: {
		display: "flex",
		justifyContent: "center",
		alignItems: "baseline",
		marginBottom: theme.spacing.unit * 2
	},
	cardActions: {
		[theme.breakpoints.up("sm")]: {
			paddingBottom: theme.spacing.unit * 2
		}
	}
});

const tiers = [
	{
		title: "Start-Up",
		price: "0",
		description: [
			"10 users included",
			"2 GB of storage",
			"Help center access",
			"Email support"
		],
		buttonText: "Sign up for free",
		buttonVariant: "default"
	},
	// {
	//   title: 'Pro',
	//   subheader: 'Most popular',
	//   price: '15',
	//   description: [
	//     '20 users included',
	//     '10 GB of storage',
	//     'Help center access',
	//     'Priority email support',
	//   ],
	//   buttonText: 'Get started',
	//   buttonVariant: 'contained',
	// },
	{
		title: "Enterprise",
		price: "30",
		description: [
			"50 users included",
			"30 GB of storage",
			"Help center access",
			"Phone & email support"
		],
		buttonText: "Contact us",
		buttonVariant: "default"
	}
];

function PricingSection(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<main className={classes.layout}>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						Pricing
					</Typography>
					<Typography
						variant="h6"
						align="center"
						color="textSecondary"
						component="p"
					>
						Quickly build an effective pricing table for your potential
						customers with this layout. It&apos;s built with default Material-UI
						components with little customization.
					</Typography>
				</div>
				{/* End hero unit */}
				<Grid container spacing={40} alignItems="flex-end">
					{tiers.map(tier => (
						// Enterprise card is full width at sm breakpoint
						<Grid item key={tier.title} xs={12} sm={6} md={6}>
							<Card>
								<CardHeader

									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: "center" }}
									subheaderTypographyProps={{ align: "center" }}
									className={classes.cardHeader}
									action={
										<IconButton>
											<MoreVertIcon />
										</IconButton>
									}
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography component="h2" variant="h3" color="textPrimary">
											${tier.price}
										</Typography>
										<Typography variant="h6" color="textSecondary">
											/mo
										</Typography>
										</div>
									{tier.description.map(line => (
										<Typography variant="subtitle1" align="center" key={line} color="textPrimary">
                      {line}
                    </Typography>
                  ))}
								</CardContent>
								<CardActions className={classes.cardActions}>
									<Button
										fullWidth
										variant={tier.buttonVariant}
										color="primary"
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</main>
		</React.Fragment>
	);
}

PricingSection.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PricingSection);
