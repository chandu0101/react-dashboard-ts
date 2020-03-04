import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import Profile from "./Profile";
import SidebarNav, { Page } from "./SidebarNav";
import UpgradePlan from "./UpgradePlan";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "8px"
  },
  divider: {
    margin: "10px"
  },
  nav: {
    marginBottom: "8px"
  }
}));

type SidebarProps = {
  className: string;
  onClose: () => any;
  open: boolean;
  variant: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  open,
  variant,
  onClose,
  className
}) => {
  const classes = useStyles();

  const pages: Page[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />
    },
    {
      title: "Users",
      href: "/users",
      icon: <PeopleIcon />
    },
    {
      title: "Products",
      href: "/products",
      icon: <ShoppingBasketIcon />
    },
    {
      title: "Typography",
      href: "/typography",
      icon: <TextFieldsIcon />
    },
    {
      title: "Icons",
      href: "/icons",
      icon: <ImageIcon />
    },
    {
      title: "Account",
      href: "/account",
      icon: <AccountBoxIcon />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      // variant={variant}
    >
      <div className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
        <UpgradePlan />
      </div>
    </Drawer>
  );
};

export default Sidebar;
