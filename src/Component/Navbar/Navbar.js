

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { IoMdGitPullRequest } from "react-icons/io";
import { IoMdCube } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import Button from '@material-ui/core/Button';
import { IoIosLogIn } from "react-icons/io";
import { Logout } from '../../Store/Actions/auth-action'
import { connect } from 'react-redux'
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({

  root1: {
    flexGrow: 1,
  },
  menuButton1: {
    marginRight: theme.spacing(2),
  },
  title1: {
    flexGrow: 1,
  },

  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#45526E'

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  function logOut(data) {
    console.log(data, 900);
    this.props.Logout(this.props.path)
  }


  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ListItem >
              <div><h6>
<p>Hishmat rai</p>

              </h6></div>
            </ListItem>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}

          </IconButton>
        </div>
        <Divider />
        <List>


          <Link to='/Home'>

            <ListItem button>
              <ListItemIcon>
                <IoIosHome />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
          </Link>

          {/* Attendance */}
          <Link to='/Myrequest'>

            <ListItem button  >
              <ListItemIcon>
                <IoMdGitPullRequest />
              </ListItemIcon>
              <ListItemText primary='My Requests' />
            </ListItem>

          </Link>




          <Link to='/Postrequirement'>
            <ListItem button>
              <ListItemIcon>
                <IoMdCube />
              </ListItemIcon>
              <ListItemText primary='Post Requirements' />
            </ListItem>
          </Link>
          {/* Delete Class */}

          <Link to='/Notification'>

            <ListItem button>
              <ListItemIcon>
                <IoMdNotifications />
              </ListItemIcon>
              <ListItemText primary='Notification' />
            </ListItem>
          </Link>

          <Link to='/Setting'>

            <ListItem button>
              <ListItemIcon>
                <IoMdSettings />
              </ListItemIcon>
              <ListItemText primary='Setting' />
            </ListItem>
          </Link>

          <Link to='/'>

            <ListItem button >
              <ListItemIcon>
                <IoIosLogIn />
              </ListItemIcon>
              <ListItemText primary='Log Out' />
            </ListItem>
          </Link>

        </List>
        <Divider />

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.component}
      </main>
    </div>
  );
}


function ButtonAppBar(props) {
  const classes = useStyles();
  function componentDidMount() {

    this.props.LoginFunc()

  }

  return (
    <div className={classes.root1}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton1} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Button color="inherit">{props.logOut}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



const mapStateToProps = state => {
  return {
    name: state.name,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Logout: (path) => dispatch(Logout(path)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
