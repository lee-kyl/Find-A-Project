import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import teamLogo from '../Assets/team-icon.png';

import {
  Avatar,
  Card,
  CardMedia,
  ClickAwayListener,
  Grid,
  Grow,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { logout } from "../Redux/actions/auth";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "none",
    boxShadow: "none",
  },
  appBar: {
    flex: 1,
    flexDirection: "row",
    "justify-content": "space-around",
    alignItems: "center",
  },
  button: {
    flexGrow: 1,
    transition: "all 0.3s",
    "&:hover": {
      color: "#8cdb2b",
      textDecoration: "underline #8cdb2b 3px",
      backgroundColor: "transparent",
    },
  },
  logoContainer: {
    flexGrow: 1,
  },
  media: {
    paddingBottom: "20px",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  hideElement: {

  }
}));

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  // Reference: https://material-ui.com/components/menus/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const { width } = useViewport();
  const breakpoint = 1200;


  useEffect(() => {
    if (localStorage.getItem("profile")) {
      const response = JSON.parse(localStorage.getItem("profile"));
      setUser(response?.result);
      const isLoggedInWithValidUser = !!response?.result.firstName;
      setIsLoggedIn(isLoggedInWithValidUser);
    }
  }, [location]);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const logoutButtonClicked = () => {
    if (isLoggedIn) {
      dispatch(logout(history));
      reset();
    }
  };

  const reset = () => {
    setUser({});
    setIsLoggedIn(false);
  }

  const open = Boolean(anchorEl);

  const renderSignUpButton = () => {
    return (
      <Grid item xs={2}>
        <Button href="/signup">
          <Typography variant="subtitle1">SIGNUP</Typography>
        </Button>
      </Grid>
    );
  }

  const renderSignInButton = () => {
    return (
      <Grid item xs={2}>
        <Button href="/signin">
          <Typography variant="subtitle1">SIGN IN</Typography>
        </Button>
      </Grid>
    );
  };

  const renderUserButton = () => {
    return (
      <>
        {
          renderHiddenComponentWhenReachBreakPoint(
            <>
                        <Grid item xs={3}>
            <Typography variant="subtitle1">Welcome back!</Typography>
          </Grid>
          <Grid item xs={1}>
            <Button href="/Profile">
              <Avatar style={{marginRight: 10}}>{user.firstName[0].toUpperCase()}</Avatar>
            </Button>
          </Grid>
            </>
          )
        }
        <Grid item sm={3} xs={12} onMouseLeave={handlePopoverClose}>
          <div className={classes.menu}>
            <div>
              <Button
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                href="/Profile"
              >
                {user.firstName} {user.lastName}
              </Button>
              <Popper
                placement="bottom-start"
                open={open}
                anchorEl={anchorEl}
                role={undefined}
                onMouseLeave={handlePopoverClose}
                onClose={handlePopoverClose}
                transition
              >
                {({ TransitionProps, placement }) => (
                  <Grow {...TransitionProps}>
                    <Paper>
                      <ClickAwayListener onClickAway={handlePopoverClose}>
                        <MenuList id="menu-list-grow">
                          <MenuItem
                            onClick={handlePopoverClose}
                            component={Link}
                            href="/Profile"
                          >
                            User Profile
                          </MenuItem>
                          <MenuItem
                            onClick={handlePopoverClose}
                            component={Link}
                            href="/item2"
                          >
                            My Team
                          </MenuItem>
                          <MenuItem
                            onClick={handlePopoverClose}
                            component={Link}
                            href="/item3"
                          >
                            Mailbox
                          </MenuItem>
                          <MenuItem onClick={logoutButtonClicked} href="/">
                            Log out
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        </Grid>
      </>
    );
  };

  const renderHiddenComponentWhenReachBreakPoint = (component) => {
    if (width > breakpoint) {
      return component;
    }
  }

  return (
    <>
      <AppBar position="static" color="transparent" className={classes.root}>
        <Toolbar>
          <Grid container justify="flex-start" alignItems="center">
            <Grid item xs={2}>
              <Button href="/">
                <HomeOutlinedIcon style={{marginRight: 10}} />
                <Typography variant="subtitle1">FIND A PROJECT</Typography>
              </Button>
            </Grid>

            {
              renderHiddenComponentWhenReachBreakPoint(
                <Grid item xs={2}>
                  <Button href="/About">
                    <img src={teamLogo} style={{width: 60, marginRight: 15}}/>
                    <Typography variant="subtitle1">About Us</Typography>
                  </Button>
                </Grid>
              )
            }

            <Grid item xs={2}></Grid>

            {/* Navigation Menus */}
            <Grid item xs={6}>
              <Grid container justify="flex-end" alignItems="center">
                {isLoggedIn ? renderUserButton() : renderSignInButton()}
                {isLoggedIn ? <></> : renderSignUpButton()}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
