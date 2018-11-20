import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Routes from "../config/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((r, idx) => (
          <Route key={idx} path={r.path} exact component={r.component} />
        ))}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
