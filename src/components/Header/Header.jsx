import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work"; // for portfolio
import BuildIcon from "@material-ui/icons/Build"; // for processes and tools
import ListIcon from "@material-ui/icons/List"; // for services
import PriceIcon from "@material-ui/icons/AttachMoney"; // for pricing
import ClientIcon from "@material-ui/icons/People"; // for clients
import CoverageIcon from "@material-ui/icons/QuestionAnswer"; // for coverage
import ContactIcon from "@material-ui/icons/LocalPhone"; // for contact
import bushido from "assets/img/bushido/bushidolab.svg";
import Button from "@material-ui/core/Button";
import ScrollIntoView from "react-scroll-into-view";
const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		background: "#171717",
		color: "#EE272B"
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
		color: "#EE272B",
		"&:hover": {
			color: "white"
		}
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: "#171717"
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end"
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	bushidoSVG: {
		height: theme.typography.pxToRem(22)
	},
	socialIcons: {
		position: "relative",
		fontSize: "20px !important",
		marginRight: "20px",
		color: "#EE272B",
		"&:hover": {
			color: "white"
		}
	},
	socialText: {
		color: "white",
		"&:hover": {
			color: "#EE272B"
		}
	},
	quoteButton: {
		position: "absolute",
		right: "2em",
		top: "0.8em",
		backgroundColor: "#EE272B",
		color: "white",
		fontSize: "12px",
		padding: "12px 30px",
		"&:hover": {
			backgroundColor: "white",
			color: "black"
		},
		"@media (min-width: 576px)": {
			right: "2em",
			top: "1em"
		},
		"@media (min-width: 768px)": {
			right: "2em",
			top: "1em"
		},
		"@media (min-width: 992px)": {
			right: "2em",
			top: "1em"
		},
		"@media (min-width: 1200px)": {
			right: "2em",
			top: "1em"
		}
	},
	dividerColor: {
		backgroundColor: "#EE272B"
	}
});

class Header extends React.Component {
	state = {
		open: false
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					title={<img src="https://unsplash.it/40/40" alt="necessary" />}
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<div>
							{" "}
							<a href="/">
								<img
									src={bushido}
									className={classes.bushidoSVG}
									alt="bushido_logo"
								/>
							</a>
						</div>
						<div>
							<ScrollIntoView alignToTop={true} selector={`#Contact`}>
								<Button
									variant="contained"
									size="medium"
									target="_blank"
									rel="noopener noreferrer"
									className={classes.quoteButton}
								>
									Get a Quote
								</Button>
							</ScrollIntoView>
						</div>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton
							onClick={this.handleDrawerClose}
							className={classes.socialIcons}
						>
							{theme.direction === "ltr" ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</div>
					<Divider className={classes.dividerColor} />
					<List>
						{[
							"Services",
							"Portfolio",
							"Processes & Tools",
							"Pricing",
							"Clients",
							"Coverage",
							"Contact Us"
						].map((text, index) => (
							<ScrollIntoView
								alignToTop={true}
								selector={`#${text.replace(/ .*/, "")}`}
								key={index}
							>
								<ListItem button key={text}>
									<ListItemIcon>
										{index === 0 ? (
											<ListIcon className={classes.socialIcons} />
										) : index === 1 ? (
											<WorkIcon className={classes.socialIcons} />
										) : index === 2 ? (
											<BuildIcon className={classes.socialIcons} />
										) : index === 3 ? (
											<PriceIcon className={classes.socialIcons} />
										) : index === 4 ? (
											<ClientIcon className={classes.socialIcons} />
										) : index === 5 ? (
											<CoverageIcon className={classes.socialIcons} />
										) : index === 6 ? (
											<ContactIcon className={classes.socialIcons} />
										) : null}
									</ListItemIcon>
									<ListItemText>
										<span className={classes.socialText}>{text}</span>
									</ListItemText>
								</ListItem>
							</ScrollIntoView>
						))}
					</List>
					<Divider className={classes.dividerColor} />
					<List>
						{[
							"Blog",
							"Github",
							"Twitter",
							"Instagram",
							"Medium",
							"LinkedIn"
						].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{/* {index % 2 ==== 0 ? <i className={classes.socialIcons + " fab fa-github"} /> : <BuildIcon />} */}
									{index === 0 ? (
										<i className={classes.socialIcons + " fas fa-pencil-alt"} />
									) : index === 1 ? (
										<i className={classes.socialIcons + " fab fa-github"} />
									) : index === 2 ? (
										<i className={classes.socialIcons + " fab fa-twitter"} />
									) : index === 3 ? (
										<i className={classes.socialIcons + " fab fa-instagram"} />
									) : index === 4 ? (
										<i className={classes.socialIcons + " fab fa-medium-m"} />
									) : index === 5 ? (
										<i className={classes.socialIcons + " fab fa-linkedin"} />
									) : null}
								</ListItemIcon>
								<ListItemText>
									<a
										className={classes.socialText}
										href={
											index === 0
												? "/"
												: index === 1
												? "https://github.com/orgs/BushidoLab"
												: index === 2
												? "https://twitter.com/bushidolab"
												: index === 3
												? "https://www.instagram.com/bushidolab/"
												: index === 4
												? "https://medium.com/@sam_80474"
												: index === 5
												? "https://www.linkedin.com/company/the-bushido-lab/about/"
												: "/"
										}
									>
										{text}
									</a>
								</ListItemText>
							</ListItem>
						))}
					</List>
				</Drawer>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
