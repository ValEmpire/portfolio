import React from "react";
import Home from "../views";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const Routes = () => {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
  };

  return (
    <Provider template={AlertTemplate} {...options}>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
