import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { Typography, Link } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {}
}));

type FooterProps = { className: string };

const Footer: React.FC<FooterProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{" "}
        <Link component="a" href="https://devias.io/" target="_blank">
          Devias IO
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};
