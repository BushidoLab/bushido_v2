import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

function InfoAreaImage({ ...props }) {
	const { classes, title, description, vertical } = props;
	const iconWrapper = classNames({
		[classes.iconWrapper]: true,
		// [classes[iconColor]]: true,
		[classes.iconWrapperVertical]: vertical
	});
	const iconClasses = classNames({
		[classes.icon]: true,
		[classes.iconVertical]: vertical
	});
	return (
		<div className={classes.infoArea}>
			<div className={iconWrapper}>
				<img
					src={props.imgSrc}
					alt="img"
					// height={props.imgHeight}
					className={iconClasses}
				/>
			</div>
			<div className={classes.descriptionWrapper}>
				<h5 className={classes.title}>{title}</h5>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
}

export default withStyles(infoStyle)(InfoAreaImage);
