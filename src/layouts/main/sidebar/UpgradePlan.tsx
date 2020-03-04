import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { Typography, Button, colors } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  media: {
    paddingTop: "8px",
    height: 80,
    textAlign: "center",
    "& > img": {
      height: "100%",
      width: "auto"
    }
  },
  actions: {
    padding: "10px",
    display: "flex",
    justifyContent: "center"
  },
  content: {
    padding: "10px"
  }
}));

type UpgradePlanProps = { className?: string };

const UpgradePlan: React.FC<UpgradePlanProps> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.media}>
        <img
          alt="Upgrade to PRO"
          src="/images/undraw_resume_folder_2_arse.svg"
        />
      </div>
      <div className={classes.content}>
        <Typography align="center" gutterBottom variant="h6">
          Upgrade to PRO
        </Typography>
        <Typography align="center" variant="body2">
          Upgrade to Devias Kit PRO and got even more components
        </Typography>
      </div>
      <div className={classes.actions}>
        <Button
          color="primary"
          component="a"
          href="https://devias.io/products/devias-kit-pro"
          variant="contained"
        >
          Upgrade
        </Button>
      </div>
    </div>
  );
};

export default UpgradePlan;
