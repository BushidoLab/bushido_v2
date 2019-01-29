import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Collapse from '@material-ui/core/Collapse';



import logoSVG from "logo.svg";
import Danger from "components/Typography/Danger.jsx";
import Bushido from '../Bushido/Bushido';
import { Fade } from '@material-ui/core';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  blackBackground:{
    backgroundColor:"black"
  },
  root: {
    // direction:"column",
    // justify: 'center',
    // alignItems: 'center',
    color:'red',
    svg: logoSVG,
    marginTop:"50%"

  },
  centered:{
    height:'100vh',
    justify:"center" ,
    alignItems:"center" ,
    direction:"column",
    marginTop:"30%"
    
  },
  mainContainer:{
    // flex: "1",
    // justifyContent: "center",
    // alignItems: "center",
    // height:"100%",
    // marginLeft: "50%",
    // marginTop: "20%"
  }

});

class CircularIndeterminate extends React.Component {
  
  // constructor(props) {
	// 	super(props);
	// 	// we use this to make the card to appear after the page has been rendered
	// 	this.state = {
	// 	  fadeOut: false
	// 	};
	// }

  render(){
    const { classes, ...rest } = this.props;
    return (
      // <Fade in 
      // timeout={500, this.props.updateFadeState()}>
      <Fade in 
      timeout={500}>
          <div className={classes.container} className={classes.blackBackground}>
          <GridContainer 
          justify="center" 
          alignItems="center" 
          direction="column"
  
          >
            {/* <Grid item xs={6} sm={5} md={5}>
            </Grid> */}
            <GridItem 
            alignItems="center" 
            justify="center" 
            direction="column"
            xs={1} sm={1} md={1}
            className={classes.centered}
            >
              <CircularProgress
              alignItems="center"
              justify="center"  
              direction="column"
              // className={classes.mainContainer}
              // color="Danger"
              // svg={bushido}
              // variant="indeterminate"
              className={
                classes.root
              }
              />
            </GridItem>
            {/* <Grid item xs={5} sm={5} md={5}>
  
            </Grid> */}
          </GridContainer>
            {/* <CircularProgress className={classes.progress} /> */}
          </div>
      </Fade>
    );
  }
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
