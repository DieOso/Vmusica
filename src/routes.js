import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./containers/dashboard";
import SignIn from "./containers/auth/SignIn";
import SignUp from "./containers/auth/SignUp";

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default BaseRouter;
