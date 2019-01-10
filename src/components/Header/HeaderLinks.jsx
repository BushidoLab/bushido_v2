/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
	const { classes } = props;
	return (
		<List className={classes.list}>
		<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Navigation"
					buttonProps={{
						className: classes.navLink,
						color: "transparent"
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link to="https://www.google.com" className={classes.dropdownLink}>
							Home
						</Link>,
						<a
							href="https://www.google.com"
							target="_blank"
							className={classes.dropdownLink}
						>
							What we offer
						</a>,
						<a
							href="https://www.google.com"
							target="_blank"
							className={classes.dropdownLink}
						>
							Portfolio
						</a>,
						<a
							href="https://www.google.com"
							target="_blank"
							className={classes.dropdownLink}
						>
							Processes and Tools
						</a>,
						<a
							href="https://www.google.com"
							target="_blank"
							className={classes.dropdownLink}
						>
							Pricing
						</a>,
						<a
							href="https://www.google.com"
							target="_blank"
							className={classes.dropdownLink}
						>
							Clients Testemonials
						</a>
					]}
				/>
			</ListItem>
			{/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem> */}
			<ListItem className={classes.listItem}>
				<Tooltip
					id="twitter-tooltip"
					title="Follow us on Twitter"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.google.com"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-twitter"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="github-tooltip"
					title="Follow us on GitHub"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://www.github.com/bushidolab"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-github"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="blog-tooltip"
					title="Read our Medium Articles"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.google.com"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-medium"} />
					</Button>
				</Tooltip>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Button
					href="https://www.google.com"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					Contact Us
				</Button>
			</ListItem>
			
		</List>
	);
}

export default withStyles(headerLinksStyle)(HeaderLinks);
