import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, Button, colors } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: (theme as any).typography.fontWeightMedium
  },
  icon: {
    color: (theme as any).palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: "1px"
  },
  active: {
    color: (theme as any).typography.fontWeightMedium,
    "& $icon": {
      color: (theme as any).palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef<any, any>((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

export type Page = { title: string; href: string; icon: any };

type SidebarNavProps = { className: string; pages: Page[] };

const SidebarNav: React.FC<SidebarNavProps> = ({ pages, className }) => {
  const classes = useStyles();

  return (
    <List className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
