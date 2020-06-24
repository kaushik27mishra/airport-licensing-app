import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

//component
import Header from "../components/header/Header"

// pages
import Dashboard from "../pages/dashboard/dashboard"

function Layout(props) {

  return (
        <>
          <Header history={props.history} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
            </Switch>
        </>
  );
}

export default withRouter(Layout);
