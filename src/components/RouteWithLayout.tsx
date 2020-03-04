import React, { Component } from "react";
import { Route } from "react-router-dom";

type RouteWithLayoutProps = {
  component: any;
  layout: any;
  path?: string;
  exact: boolean;
};

const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  layout: Layout,
  component,
  ...rest
}) => {
  return (
    <Route
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
      {...rest}
    />
  );
};

export default RouteWithLayout;
