import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

//style
import 'office-ui-fabric-react/dist/css/fabric.css';

// components
import Layout from "./layout/Layout";

// pages
import Error from "./pages/error/Error";
import Login from "./pages/auth/Login";
import AccountRequest from "./pages/auth/AccountRequest";
import Home from "./pages/home/Home";
import Faq from "./pages/faq/Faq";

// context
import { useUserState } from "./context/UserContext";

export default function App(props) {
  // global
  var { isAuthenticated } = useUserState();
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Faq} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/signup" component={AccountRequest} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/app/dashboard",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
