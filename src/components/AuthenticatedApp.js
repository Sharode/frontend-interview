import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";
import Repositories from './Repositories'
import Repository from './Repository'

const AuthenticatedApplication = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/profile" exact component={Profile} />

        <Route path="/repositories" exact component={Repositories} />
        <Route path="/repositories/:id" component={Repository} />

        <Route path="/" exact component={Home} />

        <Route path="/*">
          <div>This path doesn't exist</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AuthenticatedApplication;
