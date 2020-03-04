import { Redirect, Switch } from "react-router-dom";
import React from "react";
import RouteWithLayout from "./components/RouteWithLayout";
type RoutesProps = {};

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout exact path="/dashboard" layout={} />
    </Switch>
  );
};
