import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MyAppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const HomeView = lazy(
  () => import('./views/HomeView') /* webpackChunkName: "HomeView" */,
);
const RegisterView = lazy(
  () => import('./views/RegisterView') /* webpackChunkName: "RegisterView" */,
);
const LoginView = lazy(
  () => import('./views/LoginView') /* webpackChunkName: "LoginView" */,
);
const PhonebookView = lazy(
  () => import('./views/PhonebookView') /* webpackChunkName: "PhonebookView" */,
);
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <CssBaseline />

        <MyAppBar />
        <Container>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                restricted
                redirectTo="/contacts"
                component={RegisterView}
              />
              <PublicRoute
                path="/login"
                restricted
                component={LoginView}
                redirectTo="/contacts"
              />
              <PrivatRoute
                path="/contacts"
                component={PhonebookView}
                redirectTo="/login"
              />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
