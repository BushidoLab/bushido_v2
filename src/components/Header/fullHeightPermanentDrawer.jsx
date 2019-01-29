import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import bushido from "assets/img/bushido/bushidolab.svg";
import Tooltip from '@material-ui/core/Tooltip';


const drawerWidth = '15%';

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
    background: "black",
    color: "#EE272B"
  },
  drawer: {
    width: 'drawerWidth',
    // flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: '0px',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  sideBar: {
    //   flexGrow: 1,
    // justify: "spaceBetween",
    alignItems: "center" ,
    height: '75vh'
  },
  bushidoSVG: {
    height: theme.typography.pxToRem(22)
},
listButton:{
    "&:hover":{
        backgroundColor: "rgba(0,0,0,0)",
        color: "Danger",
    },
    paddingRight: "0px"
}
});

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
      position="fixed" 
      className={classes.appBar}
      >
        <Toolbar>
        <Typography color="inherit" noWrap>
            <a>
                <img
                    src={bushido}
                    className={classes.bushidoSVG}
                    alt="bushido_logo"
                    href="/"
                />
            </a>
        </Typography>        
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid
            className={classes.sideBar}
            container
            direction="column"
            alignItems="flex-start"
            justify="space-between"
            classes={{

            }}
        >
            <div className={classes.toolbar} />

            {['Inbox', 'Starred', 'Send email', 'Drafts', 'Drafts', 'Drafts'].map((text, index) => (
            <Grid item>
                <Tooltip title="Add" placement="right">
                    <ListItem className={classes.listButton} alignItems="flex-start" button key={text}>
                    <ListItemIcon className={classes.listButton}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    </ListItem> 

                </Tooltip>
            </Grid>
            ))}

        </Grid>
      </Drawer>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);