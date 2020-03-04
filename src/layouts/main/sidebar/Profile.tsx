import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content"
  },
  avatar: {
    width: 60,
    height: 60
  }
}));

type ProfileProps = { className?: string };

const Profile: React.FC<ProfileProps> = ({ className }) => {
  const classes = useStyles();
  const user = {
    name: "Shen Zhi",
    avatar: "/images/avatars/avatar_11.png",
    bio: "Brain Director"
  };
  return (
    <div className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={clsx(classes.root, className)}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography className={classes.avatar} variant="h4">
        {user.bio}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

export default Profile;
