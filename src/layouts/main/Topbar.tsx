import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { AppBar, Toolbar, Hidden, IconButton, Badge } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    // marginLeft: theme.spacing(1)
  }
}));

type TopbarProps = { className: string; onSidebarOpen: () => any };

export const Topbar: React.FC<TopbarProps> = ({
  className,
  onSidebarOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  return (
    <AppBar className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img src="/images/logos/logo--white.svg" alt="" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
