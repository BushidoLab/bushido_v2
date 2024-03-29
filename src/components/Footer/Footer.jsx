/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          {/* <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
								target="_blank"
								color="danger"
								aria-label="Link Home"
              >
                Bushido Lab
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
								target="_blank"
								aria-label="About"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href=""
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List> */}
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , crafted by{" "}
          <a
            href=""
            className={aClasses}
            target="_blank"
          >
            Bushido Lab
          </a>{" "}
          for a verified web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
//thanks creative tim