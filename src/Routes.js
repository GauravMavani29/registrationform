import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
function Routes(props) {
  return (
    <Router {...props}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Redirect to="/register" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
