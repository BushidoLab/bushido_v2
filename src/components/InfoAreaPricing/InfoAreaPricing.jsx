import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

function InfoAreaPricing({ ...props }) {
	const {
		classes,
		title,
		descriptionP1,
		descriptionP2,
		descriptionP3,
		descriptionP4,
		descriptionP5,
		descriptionP6,
		price,
		iconColor,
		vertical
	} = props;
	const iconWrapper = classNames({
		[classes.iconWrapper]: true,
		[classes[iconColor]]: true,
		[classes.iconWrapperVertical]: vertical
	});
	const iconClasses = classNames({
		[classes.icon]: true,
		[classes.iconVertical]: vertical
	});
	return (
		<div className={classes.infoArea}>
			<div className={iconWrapper}>
				<props.icon className={iconClasses} />
			</div>
			<div>
				<h3 className={classes.title}>{title}</h3>
				<h4 className={classes.price}>Starting from ${price}</h4>
			</div>
			<div className={classes.descriptionWrapper}>
				<p className={classes.descriptionP}>
					<li>{descriptionP1}</li>
				</p>
				<p className={classes.descriptionP}>
					<li>{descriptionP2}</li>
				</p>
				<p className={classes.descriptionP}>
					<li>{descriptionP3}</li>
				</p>
				<p className={classes.descriptionP}>
					<li>{descriptionP4}</li>
				</p>
				<p className={classes.descriptionP}>
					<li>{descriptionP5}</li>
				</p>
				<p className={classes.descriptionP}>
					<li>{descriptionP6}</li>
				</p>
			</div>
		</div>
	);
}

export default withStyles(infoStyle)(InfoAreaPricing);
