import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/forms/CreateProfile";
import Profile from "./components/profile/Profile";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className='main-centre'>
            <Route exact path='/' component={Landing} />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute exact path='/profile-me' component={Profile} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
